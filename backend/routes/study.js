const express = require('express');
const mysql = require('../libs/mysql');
const passport = require('../libs/passport');
const Message = require('../libs/message');

const router = express.Router();


//   경로가 '/'이고 GET 방식으로 요청했을 때
router.use(mysql.use());

router.get('/', async (req, res, next) => {
    let result = await req.mysql.query(
        'SELECT * FROM `study`'
    );
    res.send(result);
});
router.get('/:idx(\\d+)', async (req, res, next) => {

    let idx = parseInt(req.params.idx);
    let result = await req.mysql.query(
        'SELECT * FROM `study` WHERE idx=?',
        [idx]

    );
    res.send(result);
});

router.post('/', passport.jwt(),async (req, res, next) => {
    if (req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let { name, active, content } = req.body;

    let result = await req.mysql.query(
        'INSERT INTO `study` (`name`,`active`,`content`) VALUES (?, ?, ?)',
        [name, active, content]
    );

    res.send(result);
});

router.post('/request', passport.jwt(),async (req, res, next) => {
    let { name, content } = req.body;
    let result = await req.mysql.query(
        'INSERT INTO `study` (`name`,`active`,`content`) VALUES (?, ?, ?)',
        [name, 0, content]
    );

    res.send(result);
});

router.patch('/:idx(\\d+)', passport.jwt(), async (req, res, next) => {
    let idx = parseInt(req.params.idx);
    let { name, active, content } = req.body;
    if (req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let result = await req.mysql.query(
        'UPDATE study SET name=?, active=?, content=? WHERE idx=?',
        [name, active, content,idx]
    );
    res.send(`스터디 수정: ${idx}`);
});

//   경로가 '/숫자'이고 DELETE 방식으로 요청했을 때
router.delete('/:idx(\\d+)', passport.jwt(), async (req, res, next) => {
    let idx = parseInt(req.params.idx);
    if (req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let result = await req.mysql.query(
        'DELETE FROM study WHERE idx=?',
        [idx]
    );
    res.send(`스터디 삭제: ${idx}`);
});
module.exports = router;