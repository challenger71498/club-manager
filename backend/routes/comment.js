const express = require('express');
const mysql = require('../libs/mysql');
const passport = require('../libs/passport');
const Message = require('../libs/message');

const router = express.Router({
    mergeParams: true
});


router.use(mysql.use(), async (req, res, next) => {
    let documentIdx = parseInt(req.params.document_idx);

    let result = await req.mysql.query(
        'SELECT * FROM `document` WHERE `idx` = ?',
        [documentIdx]
    );

    if (!result[0]) {
        throw Message.DOCUMENT_NOT_EXIST;
    }

    req.document = result[0];
    next();
});

//   경로가 '/'이고 GET 방식으로 요청했을 때

router.get('/', async (req, res, next) => {
    let { page } = req.query;
    page = parseInt(page) || 1;
    if (page < 1) page = 1;

    const count = 20;

    let result1 = await req.mysql.query(
        'SELECT COUNT(*) as count FROM `comment` WHERE document_idx=?',
        [req.document.idx]
    );

    let result2 = await req.mysql.query(
        'SELECT * FROM `comment` WHERE document_idx=? ORDER BY `idx` ASC LIMIT ?,?',
        [  req.document.idx, (page - 1) * count, count ]
    );

    res.send({
        page,
        total: result1[0].count,
        count,
        items: result2
    });
});

router.post('/', passport.jwt(), async (req, res, next) => {
    let { content } = req.body;
    let result1 = await req.mysql.query(
        'INSERT INTO `comment` (`document_idx`, `content`, `writer`, `writer_name`) VALUES (?, ?, ?, ?)',
        [ req.document.idx, content, req.member.idx, req.member.name ]
    );
    let result2= await req.mysql.query(
        'SELECT * FROM `comment` WHERE idx=?',
        [result1.insertId]
    );
    res.send(result2[0]);
});

router.patch('/:idx(\\d+)', passport.jwt(),async (req, res, next) => {
    let idx = parseInt(req.params.idx);
    if (req.member.idx !== idx) {
        throw Message.NOT_GRANTED;
    }
    let { content } = req.body;

    let result1 = await req.mysql.query(
        'UPDATE comment SET content=? WHERE idx=?',
        [content, idx]
    );
    let result2 = await req.mysql.query(
        'SELECT * FROM `comment` WHERE idx=?',
        [idx]
    );
    res.send(result2[0]);
});

//   경로가 '/숫자'이고 DELETE 방식으로 요청했을 때
router.delete('/:idx(\\d+)', passport.jwt(), async (req, res, next) => {
    let idx = parseInt(req.params.idx);
    if (req.member.idx !== idx && req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let result = await req.mysql.query(
        'DELETE FROM comment WHERE idx=?',
        [idx]
    );
    res.send(true);
});

module.exports=router;