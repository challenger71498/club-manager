const express = require('express');
const mysql = require('../libs/mysql');
const passport = require('../libs/passport');
const Message = require('../libs/message');

const router = express.Router({
    mergeParams: true
});

//   경로가 '/'이고 GET 방식으로 요청했을 때
router.use(mysql.use(), passport.jwt(), async (req, res, next) => {
    let projectIdx = parseInt(req.params.project_idx);

    let result1 = await req.mysql.query(
        'SELECT * FROM `project` WHERE `idx` = ?',
        [projectIdx]
    );

    if (!result1[0]) {
        throw Message.PROJECT_NOT_EXIST;
    }

    req.project = result1[0];

    let result2 = await req.mysql.query(
        'SELECT * FROM `memberofproject` WHERE `project_idx` = ? AND `member_idx` = ?',
        [ req.project.idx, req.member.idx]
    );

    req.memberofproject = result2[0];
    next();
});

router.post('/', passport.jwt(),async (req, res, next) => {
    let result1 = await req.mysql.query(
        'INSERT INTO `memberofproject` (`project_idx`,`member_idx`) VALUES (?, ?)',
        [req.project.idx, req.member.idx]
    );
    let result2 = await req.mysql.query(
        'SELECT * FROM `memberofproject` WHERE idx=?',
        [result1.insertId]
    );
    res.send(result2[0]);
}, async (err, req, res, next) => {
    if (err.code === 'ER_DUP_ENTRY') {
        throw Message.PROJECT_ALREADY_JOINED;
    }

    throw err;
});

router.get('/', async (req, res, next) => {
    if (!req.memberofproject || req.memberofproject.level !== 0) {
        throw Message.NOT_GRANTED;
    }

    let items = await req.mysql.query(
        'SELECT * FROM `memberofproject`'
    );
    res.send({ items });
});


router.patch('/:idx(\\d+)', async (req, res, next) => {
    let idx = parseInt(req.params.idx);
    if (!req.memberofproject || req.memberofproject.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let result1 = await req.mysql.query(
        'UPDATE `memberofproject` SET level=? WHERE idx=?',
        [req.body.level]
    );
    let result2 = await req.mysql.query(
        'SELECT * FROM `memberofstudy` WHERE idx=?',
        [idx]
    );
    res.send(result2[0])
});

//   경로가 '/숫자'이고 DELETE 방식으로 요청했을 때
router.delete('/:idx(\\d+)', passport.jwt(), async (req, res, next) => {
    let idx = parseInt(req.params.idx);
    if (!req.memberofproject || req.memberofproject.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let result = await req.mysql.query(
        'DELETE FROM memberofproject WHERE idx=?',
        [idx]
    );
    res.send(true);
});

module.exports = router;