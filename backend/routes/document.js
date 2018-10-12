const express = require('express');
const mysql = require('../libs/mysql');
const passport = require('../libs/passport');
const Message = require('../libs/message');


const router = express.Router({
    mergeParams: true
});

router.use('/:document_idx/comments', require('./comment'));

router.use(mysql.use(), async (req, res, next) => {
    let boardIdx = parseInt(req.params.board_idx);

    let result = await req.mysql.query(
        'SELECT * FROM `board` WHERE `idx` = ?',
        [boardIdx]
    );

    if (!result[0]) {
        throw Message.BOARD_NOT_EXIST;
    }

    req.board = result[0];
    next();
});

//   경로가 '/'이고 GET 방식으로 요청했을 때

router.get('/', async (req, res, next) => {

    let result = await req.mysql.query(
        'SELECT * FROM `document`'
    );
    res.send(result);
});
router.get('/:idx(\\d+)', async (req, res, next) => {

    let idx = parseInt(req.params.idx);
    let result = await req.mysql.query(
        'SELECT * FROM `document` WHERE idx=?',
        [idx]

    );
    res.send(result);
});

router.post('/', passport.jwt(), async (req, res, next) => {

    let { title, content } = req.body;

    let result = await req.mysql.query(
        'INSERT INTO `document` (`title`, `content`, `writer`, `writer_name`,`board_idx`) VALUES (?, ?, ?, ?, ?)',
        [title, content, req.member.idx, req.member.name, req.board.idx]
    );

    res.send(result);
});

router.patch('/:idx(\\d+)',passport.jwt(), async (req, res, next) => {
    let idx = parseInt(req.params.idx);
    if (req.member.idx !== idx) {
        throw Message.NOT_GRANTED;
    }
    let { title, content } = req.body;

    let result = await req.mysql.query(
        'UPDATE document SET title=?, content=? WHERE idx=?',
        [title, content, idx]
    );
    res.send(`게시글 수정: ${idx}`);
});

//   경로가 '/숫자'이고 DELETE 방식으로 요청했을 때
router.delete('/:idx(\\d+)', passport.jwt(), async (req, res, next) => {
    let idx = parseInt(req.params.idx);
    if (req.member.idx !== idx && req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let result = await req.mysql.query(
        'DELETE FROM document WHERE idx=?',
        [idx]
    );
    res.send(`게시글 삭제: ${idx}`);
});
module.exports=router;