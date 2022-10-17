var express = require('express');
var router = express.Router();
const querySql = require('../db/index')

//新增标签接口
router.post('/addLabel', async(req, res, next) => {
    let { label } = req.body
    // let { username } = req.user
    try {
        let sql = 'insert into label(label) value(?)'
        await querySql(sql, [label])
        res.send({ code: 0, msg: '新增成功', data: null })
    } catch (e) {
        console.log(e)
        next(e)
    }
});

// 获取所有标签接口
router.get('/allLabel', async(req, res, next) => {
    try {
        let sql = 'select id,label from label'
        let result = await querySql(sql)
        res.send({ code: 0, msg: '获取成功', data: result })
    } catch (e) {
        console.log(e)
        next(e)
    }
});

//初始标签接口
// router.post('/theLabel', async(req, res, next) => {
//     try {
//         let sql = 'insert into label(label) value(?)'
//         // let sql = 'select id,label from label'
//         let result = await querySql(sql,['前端'])
//         res.send({ code: 0, msg: '获取成功', data: result })
//     } catch (e) {
//         console.log(e)
//         next(e)
//     }
// });



module.exports = router;