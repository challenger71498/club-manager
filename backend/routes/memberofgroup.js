const express = require('express');
const mysql = require('../libs/mysql');
const passport = require('../libs/passport');
const Message = require('../libs/message');

const router = express.Router({
    mergeParams: true
});

//   경로가 '/'이고 GET 방식으로 요청했을 때
router.use(mysql.use(), passport.jwt(), async (req, res, next) => {
    let groupIdx = parseInt(req.params.group_idx);

    let result1 = await req.mysql.query(
        'SELECT * FROM `group` WHERE `idx` = ?',
        [groupIdx]
    );

    if (!result1[0]) {
        throw Message.GROUP_NOT_EXIST;
    }

    req.group = result1[0];

    let result2 = await req.mysql.query(
        'SELECT * FROM `memberofgroup` WHERE `group_idx` = ? AND `member_idx` = ?',
        [ req.group.idx, req.member.idx]
    );

    req.memberofgroup = result2[0];
    next();
});

router.get('/', async (req, res, next) => {
    if (!req.memberofgroup || req.memberofgroup.level !== 0) {
        throw Message.NOT_GRANTED;
    }

    let items = await req.mysql.query(
        'SELECT * FROM `memberofgroup`'
    );
    res.send({ items });
});

router.post('/', passport.jwt(),async (req, res, next) => {
    let result1 = await req.mysql.query(
        'INSERT INTO `memberofgroup` (`group_idx`,`member_idx`) VALUES (?, ?)',
        [req.group.idx, req.member.idx]
    );
    let result2 = await req.mysql.query(
        'SELECT * FROM `memberofgroup` WHERE idx=?',
        [result1.insertId]
    );
    res.send(result2[0]);
}, async (err, req, res, next) => {
    if (err.code === 'ER_DUP_ENTRY') {
        throw Message.GROUP_ALREADY_JOINED
    }

    throw err;
});

router.patch('/:idx(\\d+)', async (req, res, next) => {
    let idx = parseInt(req.params.idx);
    if (!req.memberofgroup || req.memberofgroup.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let result1 = await req.mysql.query(
        'UPDATE `memberofgroup` SET level=? WHERE idx=?',
        [req.body.level,req.memberofgroup.idx]
    );
    let result2 = await req.mysql.query(
        'SELECT * FROM `memberofgroup` WHERE idx=?',
        [idx]
    );
    res.send(result2[0]);
});

//   경로가 '/숫자'이고 DELETE 방식으로 요청했을 때
router.delete('/:idx(\\d+)', passport.jwt(), async (req, res, next) => {
    let idx = parseInt(req.params.idx);
    if (!req.memberofgroup || req.memberofgroup.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let result = await req.mysql.query(
        'DELETE FROM memberofgroup WHERE idx=?',
        [idx]
    );
    res.send(true);
});

module.exports = router;