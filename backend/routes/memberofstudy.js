const express = require('express');
const mysql = require('../libs/mysql');
const passport = require('../libs/passport');
const Message = require('../libs/message');

const router = express.Router({
    mergeParams: true
});

//   경로가 '/'이고 GET 방식으로 요청했을 때
router.use(mysql.use(), passport.jwt(), async (req, res, next) => {
    let studyIdx = parseInt(req.params.study_idx);

    let result1 = await req.mysql.query(
        'SELECT * FROM `study` WHERE `idx` = ?',
        [studyIdx]
    );

    if (!result1[0]) {
        throw Message.STUDY_NOT_EXIST;
    }

    req.study = result1[0];

    let result2 = await req.mysql.query(
        'SELECT * FROM `memberofstudy` WHERE `study_idx` = ? AND `member_idx` = ?',
        [ req.study.idx, req.member.idx]
    );

    req.memberofstudy = result2[0];
    next();
});

router.post('/', passport.jwt(),async (req, res, next) => {
    let result = await req.mysql.query(
        'INSERT INTO `memberofstudy` (`study_idx`,`member_idx`) VALUES (?, ?)',
        [ req.study.idx, req.member.idx]
    );
    res.send(result);
}, async (err, req, res, next) => {
    if (err.code === 'ER_DUP_ENTRY') {
        throw Message.STUDY_ALREADY_JOINED;
    }

    throw err;
});


router.get('/', async (req, res, next) => {
    if (!req.memberofstudy || req.memberofstudy.level !== 0) {
        throw Message.NOT_GRANTED;
    }

    let result = await req.mysql.query(
        'SELECT * FROM `memberofstudy`'
    );
    res.send(result);
});


router.patch('/:idx(\\d+)', async (req, res, next) => {
    let idx = parseInt(req.params.idx);
    if (!req.memberofstudy || req.memberofstudy.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let result = await req.mysql.query(
        'UPDATE `memberofstudy` SET level=? WHERE idx=?',
        [req.body.level]
    );
    res.send(`스터디 회원 정보 수정: ${idx}`);
});

//   경로가 '/숫자'이고 DELETE 방식으로 요청했을 때
router.delete('/:idx(\\d+)', passport.jwt(), async (req, res, next) => {
    let idx = parseInt(req.params.idx);
    if (!req.memberofstudy || req.memberofstudy.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let result = await req.mysql.query(
        'DELETE FROM memberofstudy WHERE idx=?',
        [idx]
    );
    res.send(`스터디 회원 삭제: ${idx}`);
});

module.exports = router;