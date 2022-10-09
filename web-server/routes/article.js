var express = require('express');
var router = express.Router();
const querySql = require('../db/index')

/* 新增博客接口 */
router.post('/add', async(req, res, next) => {
    let { title, content } = req.body
    let { username } = req.user
    try {
        let user = await querySql('select id,head_img,nickname from user where username = ?', [username])
        console.log('新增博客接口的用户信息',user)
        // let user_id = user[0].id
        let {id:user_id,head_img,nickname} = user[0]
        let sql = 'insert into article(title,content,user_id,create_time,head_img,nickname) values(?,?,?,NOW(),?,?)'
        await querySql(sql, [title, content, user_id,head_img,nickname])
        res.send({ code: 0, msg: '新增成功', data: null })
    } catch (e) {
        console.log(e)
        next(e)
    }
});

// 获取全部博客列表接口
router.get('/allList', async(req, res, next) => {
    try {
        let sql = 'select id,title,content,DATE_FORMAT(create_time,"%Y-%m-%d %H:%i:%s") AS create_time from article'
        let result = await querySql(sql)
        res.send({ code: 0, msg: '获取成功', data: result })
    } catch (e) {
        console.log(e)
        next(e)
    }
});

// 获取我的博客列表接口
router.get('/myList', async(req, res, next) => {
    let { username } = req.user
    try {
        let userSql = 'select id from user where username = ?'
        let user = await querySql(userSql, [username])
        let user_id = user[0].id
        let sql = 'select id,title,content,DATE_FORMAT(create_time,"%Y-%m-%d %H:%i:%s") AS create_time from article where user_id = ?'
        // 去表里找作者id=用户id的文章信息
        let result = await querySql(sql, [user_id])
        res.send({ code: 0, msg: '获取成功', data: result })
    } catch (e) {
        console.log(e)
        next(e)
    }
});

//



// 获取博客详情页接口
router.get('/detail', async(req, res, next) => {
    console.log('详情',req.query.article_id)
    let article_id = req.query.article_id
    // ???文章id靠前端传过来
    try {

        let sql = 'select id,title,content,DATE_FORMAT(create_time,"%Y-%m-%d %H:%i:%s") AS create_time,head_img,nickname from article where id = ?'
        // 当用户id=文章id时??????
        let result = await querySql(sql, [article_id])
        res.send({ code: 0, msg: '获取成功', data: result[0] })
    } catch (e) {
        console.log(e)
        next(e)
    }
});


// 更新博客接口
router.post('/update', async(req, res, next) => {
    let { article_id, title, content } = req.body
    let { username } = req.user
    try {
        let userSql = 'select id,head_img,nickname from user where username = ?'
        let user = await querySql(userSql, [username])
        // let user_id = user[0].id
        let {id:user_id,head_img,nickname} = user[0]
        let sql = 'update article set title = ?,content = ?,head_img=?,nickname=? where id = ? and user_id = ?'
        let result = await querySql(sql, [title, content,head_img,nickname, article_id, user_id])
        res.send({ code: 0, msg: '更新成功', data: null })
    } catch (e) {
        console.log(e)
        next(e)
    }
});

// 删除博客接口
router.post('/delete', async(req, res, next) => {
    let { article_id } = req.body
    let { username } = req.user
    try {
        let userSql = 'select id from user where username = ?'
        let user = await querySql(userSql, [username])
        let user_id = user[0].id
        let sql = 'delete from article where id = ? and user_id = ?'
        let result = await querySql(sql, [article_id, user_id])
        res.send({ code: 0, msg: '删除成功', data: null })
    } catch (e) {
        console.log(e)
        next(e)
    }
});

module.exports = router;