const express = require('express');
const mysql = require('../libs/mysql');
const passport = require('../libs/passport');
const Message = require('../libs/message');

const router = express.Router();


//   경로가 '/'이고 GET 방식으로 요청했을 때
router.use(mysql.use());

router.get('/', async (req, res, next) => {
    let items = await req.mysql.query(
        'SELECT * FROM `project`'
    );
    res.send({items});
});
router.get('/:idx(\\d+)', async (req, res, next) => {

    let idx = parseInt(req.params.idx);
    let result = await req.mysql.query(
        'SELECT * FROM `project` WHERE idx=?',
        [idx]

    );
    res.send(result[0]);
});

router.post('/', passport.jwt(),async (req, res, next) => {
    if (req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let { name, active, content } = req.body;

    let result1 = await req.mysql.query(
        'INSERT INTO `project` (`name`,`active`,`content`) VALUES (?, ?, ?)',
        [name, active, content]
    );
    let result2 = await req.mysql.query(
        'SELECT * FROM `project` WHERE idx=?',
        [result1.insertId]
    );
    res.send(result2[0]);
});

router.post('/request', passport.jwt(),async (req, res, next) => {
    let { name, content } = req.body;
    let result1 = await req.mysql.query(
        'INSERT INTO `project` (`name`,`active`,`content`) VALUES (?, ?, ?)',
        [name, 0, content]
    );
    let result2 = await req.mysql.query(
        'SELECT * FROM `project` WHERE idx=?',
        [result1.insertId]
    );
    res.send(result2[0]);
});

router.patch('/:idx(\\d+)', passport.jwt(), async (req, res, next) => {
    let idx = parseInt(req.params.idx);
    let { name, active, content } = req.body;
    if (req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let result1 = await req.mysql.query(
        'UPDATE project SET name=?, active=?, content=? WHERE idx=?',
        [name, active, content,idx]
    );
    let result2 = await req.mysql.query(
        'SELECT * FROM `project` WHERE idx =?',
        [idx]
    );
    res.send(result2[0]);
});

//   경로가 '/숫자'이고 DELETE 방식으로 요청했을 때
router.delete('/:idx(\\d+)', passport.jwt(), async (req, res, next) => {
    let idx = parseInt(req.params.idx);
    if (req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let result = await req.mysql.query(
        'DELETE FROM project WHERE idx=?',
        [idx]
    );
    res.send(true);
});
module.exports = router;