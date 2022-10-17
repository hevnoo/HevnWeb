var express = require('express');
var router = express.Router();
const querySql = require('../db/index')

/* 新增博客接口 */
router.post('/add', async(req, res, next) => {
    //label代表id，labels代表标签名！！
    console.log('消息体',req.body)
    let { title, content ,label} = req.body
    let { username } = req.user
    console.log('标签id',label)
    try {
        // let labelVal = label.split(',')
        // let labelLen = labelVal.length
        // console.log('处理后的长度',labelLen)
        // let labels = await querySql('select label from label where id=? ',[label])
        // console.log('标签',labels)
        let user = await querySql('select id,head_img,nickname from user where username = ?', [username])
        // let user_id = user[0].id
        let {id:user_id,head_img,nickname} = user[0]
        let sql = 'insert into article(title,content,user_id,create_time,head_img,nickname,label) values(?,?,?,NOW(),?,?,?)'
        await querySql(sql, [title, content, user_id,head_img,nickname,label])
            res.send({ code: 0, msg: '新增成功', data: null })
    } catch (e) {
        console.log(e)
        next(e)
    }
});

// 获取全部博客列表接口
router.get('/allList', async(req, res, next) => {
    try {
        let sql = 'select id,title,content,DATE_FORMAT(create_time,"%Y-%m-%d %H:%i:%s") AS create_time,label from article'
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
        let sql = 'select id,title,content,DATE_FORMAT(create_time,"%Y-%m-%d %H:%i:%s") AS create_time,label from article where user_id = ?'
        // 去表里找作者id=用户id的文章信息
        let result = await querySql(sql, [user_id])
        res.send({ code: 0, msg: '获取成功', data: result })
    } catch (e) {
        console.log(e)
        next(e)
    }
});

//获取二级导航栏分类博客接口
router.get('/navBlog', async(req, res, next) => {
    // let {label} = req.query
    let label = req.query.label
    try {
        let sql = 'select id,title,content,DATE_FORMAT(create_time,"%Y-%m-%d %H:%i:%s") AS create_time,head_img,nickname,label from article where label like ?'
        // let sql = 'select * from article where label like %?%'
        let result = await querySql(sql, ['%'+label+'%'])
        console.log('结果::',result)
        res.send({ code: 0, msg: '获取成功', data: result })
    } catch (e) {
        console.log(e)
        next(e)
    }
});

// 获取博客详情页接口
router.get('/detail', async(req, res, next) => {
    // console.log('详情文章id',req.query.article_id)
    let article_id = req.query.article_id
    // 通过前端传过来选中的文章的id
    try {
        let sql = 'select id,title,content,DATE_FORMAT(create_time,"%Y-%m-%d %H:%i:%s") AS create_time,head_img,nickname,label from article where id = ?'
        // 当文章id=选中的文章id时
        let result = await querySql(sql, [article_id])
        res.send({ code: 0, msg: '获取成功', data: result[0] })
    } catch (e) {
        console.log(e)
        next(e)
    }
});


// 更新博客接口
router.post('/update', async(req, res, next) => {
    let { article_id, title, content,label } = req.body
    let { username } = req.user
    try {
        let userSql = 'select id,head_img,nickname from user where username = ?'
        let user = await querySql(userSql, [username])
        // let user_id = user[0].id
        let {id:user_id,head_img,nickname} = user[0]
        let sql = 'update article set title=?,content=?,head_img=?,nickname=?,label=? where id = ? and user_id = ?'
        let result = await querySql(sql, [title, content,head_img,nickname,label, article_id, user_id])
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