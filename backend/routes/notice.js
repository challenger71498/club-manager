const express = require('express');
const mysql = require('../libs/mysql');
const passport = require('../libs/passport');
const Message = require('../libs/message');
const router = express.Router();

//   경로가 '/'이고 GET 방식으로 요청했을 때

router.get('/', mysql.use(), async (req, res, next) => {

    let result = await req.mysql.query(
        'SELECT * FROM `notice`'
    );
    res.send(result);
});
router.get('/:idx(\\d+)', mysql.use(), async (req, res, next) => {

    let idx = parseInt(req.params.idx);
    let result = await req.mysql.query(
        'SELECT * FROM `notice` WHERE idx=?',
        [idx]
    );
    res.send(result);
});

router.post('/', passport.jwt(),mysql.use(),  async (req, res, next) => {
    if (req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let { title, content } = req.body;
    let result = await req.mysql.query(
        'INSERT INTO `notice` (`title`, `content`, `writer`, `writer_name`) VALUES (?, ?, ?, ?)',
        [title, content, req.member.idx, req.member.name]
    );

    res.send(result);
});

router.patch('/:idx(\\d+)', passport.jwt(), mysql.use(), async (req, res, next) => {
    let idx = parseInt(req.params.idx);
    if (req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let { title, content } = req.body;

    let result = await req.mysql.query(
        'UPDATE notice SET title=?, content=? WHERE idx=?',
        [title, content, idx]
    );
    res.send(`공지 수정: ${idx}`);
});

//   경로가 '/숫자'이고 DELETE 방식으로 요청했을 때
router.delete('/:idx(\\d+)', passport.jwt(),mysql.use(), async (req, res, next) => {
    if (req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let idx = parseInt(req.params.idx);
    let result = await req.mysql.query(
        'DELETE FROM notice WHERE idx=?',
        [idx]
    );

    res.send(`공지 삭제: ${idx}`);
});

module.exports = router;