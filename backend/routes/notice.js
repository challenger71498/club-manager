const express = require('express');
const mysql = require('../libs/mysql');
const passport = require('../libs/passport');
const Message = require('../libs/message');
const router = express.Router();

//   경로가 '/'이고 GET 방식으로 요청했을 때

router.get('/', mysql.use(), async (req, res, next) => {
    let { page, keyword } = req.query;
    page = parseInt(page) || 1;
    if (page < 1) page = 1;

    const count = 20;

    if (typeof keyword !== 'string') {
        keyword = '';
    }

    keyword = '%' + keyword + '%';

    let result1 = await req.mysql.query(
        'SELECT COUNT(*) as count FROM `notice` WHERE `title` LIKE ? AND `content` LIKE ?',
        [ keyword, keyword ]
    );

    let result2 = await req.mysql.query(
        'SELECT * FROM `notice` WHERE `title` LIKE ? AND `content` LIKE ? ORDER BY `idx` DESC LIMIT ?,?',
        [ keyword, keyword, (page - 1) * count, count ]
    );

    res.send({
        page,
        total: result1[0].count,
        count,
        items: result2
    });
});
router.get('/:idx(\\d+)', mysql.use(), async (req, res, next) => {

    let idx = parseInt(req.params.idx);
    let result = await req.mysql.query(
        'SELECT * FROM `notice` WHERE idx=?',
        [idx]
    );
    res.send(result[0]);
});

router.post('/', passport.jwt(),mysql.use(),  async (req, res, next) => {
    if (req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let { title, content } = req.body;
    let result1 = await req.mysql.query(
        'INSERT INTO `notice` (`title`, `content`, `writer`, `writer_name`) VALUES (?, ?, ?, ?)',
        [title, content, req.member.idx, req.member.name]
    );
    let result2 = await req.mysql.query(
        'SELECT * FROM `notice` WHERE idx=?',
        [result1.insertId]
    );
    res.send(result2[0]);
});

router.patch('/:idx(\\d+)', passport.jwt(), mysql.use(), async (req, res, next) => {
    let idx = parseInt(req.params.idx);
    if (req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let { title, content } = req.body;

    let result1 = await req.mysql.query(
        'UPDATE notice SET title=?, content=? WHERE idx=?',
        [title, content, idx]
    );
    let result2 = await req.mysql.query(
        'SELECT * FROM `notice` WHERE idx=?',
        [idx]
    )
    res.send(result2[0])
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

    res.send(true);
});

module.exports = router;