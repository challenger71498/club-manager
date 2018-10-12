const express = require('express');
const mysql = require('../libs/mysql');
const passport = require('../libs/passport');
const Message = require('../libs/message');
const router = express.Router();

//   경로가 '/'이고 GET 방식으로 요청했을 때

router.get('/', mysql.use(), async (req, res, next) => {

    let result = await req.mysql.query(
        'SELECT * FROM `bylaw`'
    );
    res.send(result);
});

router.get('/:idx(\\d+)', mysql.use(), async (req, res, next) => {

    let idx = parseInt(req.params.idx);
    let result = await req.mysql.query(
        'SELECT * FROM `bylaw` WHERE idx=?',
        [idx]

    );
    res.send(result);
});

router.post('/', mysql.use(), passport.jwt(),  async (req, res, next) => {

    if (req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let result = await req.mysql.query(
        'INSERT INTO `bylaw` (`content`) VALUES (?)',
        [req.body.content]
    );

    res.send(result);
});

router.patch('/:idx(\\d+)', mysql.use(), passport.jwt(), async (req, res, next) => {
    let idx = parseInt(req.params.idx);
    if (req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let { content } = req.body;

    let result = await req.mysql.query(
        'UPDATE bylaw SET content=? WHERE idx=?',
        [content, idx]
    );
    res.send(`회칙 수정: ${idx}`);
});

router.delete('/:idx(\\d+)', mysql.use(), passport.jwt(), async (req, res, next) => {
    let idx = parseInt(req.params.idx);
    if (req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let result = await req.mysql.query(
        'DELETE FROM bylaw WHERE idx=?',
        [idx]
    );

    res.send(`회칙 삭제: ${idx}`);
});
module.exports = router;