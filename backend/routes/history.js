const express = require('express');
const mysql = require('../libs/mysql');
const passport= require('../libs/passport');
const Message = require('../libs/message');
const router = express.Router();

//   경로가 '/'이고 GET 방식으로 요청했을 때

router.get('/', mysql.use(), async (req, res, next) => {

    let result = await req.mysql.query(
        'SELECT * FROM `history`'
    );
    res.send(result);
});


router.post('/', mysql.use(), passport.jwt(), async (req, res, next) => {

    if (req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let result = await req.mysql.query(
        'INSERT INTO `history` (`year`, `month`,`content`) VALUES (?, ?, ?)',
        [req.body.year, req.body.month, req.body.content]
    );

    res.send(result);
});

router.patch('/:idx(\\d+)', mysql.use(), passport.jwt(), async (req, res, next) => {
    let idx = parseInt(req.params.idx);
    let { year, month, content } = req.body;
    if (req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let result = await req.mysql.query(
        'UPDATE history SET year=?, month=?, content=? WHERE idx=?',
        [year, month, content, idx]
    );
    res.send(`연혁 수정: ${idx}`);
});

router.delete('/:idx(\\d+)', passport.jwt(),mysql.use(), async (req, res, next) => {
    let idx = parseInt(req.params.idx);
    if (req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let result = await req.mysql.query(
        'DELETE FROM history WHERE idx=?',
        [idx]
    );

    res.send(`연혁 삭제: ${idx}`);
});
module.exports = router;