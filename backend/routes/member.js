const express = require('express');
const mysql = require('../libs/mysql');
const jwt = require('../libs/jwt');
const passport = require('../libs/passport');
const Message = require('../libs/message');
const security = require('../libs/security');

const router = express.Router();

//   경로가 '/'이고 GET 방식으로 요청했을 때
router.get('/', mysql.use(), async (req, res, next) => {
    let result = await req.mysql.query(
        'SELECT * FROM `member`'
    );
    res.send(result[0]);
});

router.get('/token', passport.jwt(), async (req, res, next)=> {
    res.send(req.member);
});

/**
 * Login
 */
router.post('/token', mysql.use(), async (req, res, next) => {
    let { id, password } = req.body;

    password = security.sha512(password);

    let result = await req.mysql.query(
        'SELECT * FROM `member` WHERE `id` = ? AND `password` = ? LIMIT 1',
        [ id, password ]
    );

    let member = result[0];
    if (!member) {
        throw Message.MEMBER_NOT_EXIST;
    }

    if (member.password !== password) {
        throw Message.MEMBER_NOT_EXIST;
    }

    delete member.password;
    member.token = jwt.sign({ idx: member.idx });

    res.header('X-Token', member.token);
    res.send(member);
});

router.post('/', mysql.use(),  async (req, res, next) => {
    let { id, password, name, student_number } = req.body;

    if (!id) {
        throw Message.INVALID_PARAMETER('id');
    }

    if (!password) {
        throw Message.INVALID_PARAMETER('password');
    }

    if (!name) {
        throw Message.INVALID_PARAMETER('name');
    }

    if (!student_number) {
        throw Message.INVALID_PARAMETER('student_number');
    }

    password = security.sha512(password);

    let result1 = await req.mysql.query(
        'INSERT INTO `member` (`id`, `password`, `name`, `student_number`) VALUES (?, ?, ?, ?)',
        [id, password, name, student_number]
    );

    let result2 = await req.mysql.query(
        'SELECT * FROM `member` WHERE `idx` = ?',
        [result1.insertId]
    );

    res.send(result2[0]);
}, async (err, req, res, next) => {
    if (err.code === 'ER_DUP_ENTRY') {
        throw Message.DUPLICATED_ID;
    }

    throw err;
});



router.patch('/:idx(\\d+)', passport.jwt(), mysql.use(), async (req, res, next) => {
    let idx = parseInt(req.params.idx);

    if (req.member.idx !== idx && req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }

    let id = req.body.id;
    let password = req.body.password;
    let name = req.body.name;
    let student_number = req.body.student_number;
    let result1 = await req.mysql.query(
        'UPDATE member SET id=?, password=?, name=?, student_number=? WHERE idx=?',
        [id, password, name, student_number,idx]
    );
    let result2 = await req.mysql.query(
        'SELECT * FROM `member` WHERE idx=?',
        [idx]
    );
    res.send(result2[0])
});

//   경로가 '/숫자'이고 DELETE 방식으로 요청했을 때
router.delete('/:idx(\\d+)', passport.jwt(),mysql.use(), async (req, res, next) => {

    if (req.member.idx !== idx && req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let idx = parseInt(req.params.idx);
    req.mysql.query(
        'DELETE FROM member WHERE idx=?',
        [idx]
    );

    res.send(true);
});

// 이렇게 router라는걸 만들어서 내보내는데, 내보낸걸 어떻게 쓰냐면
// 다른 파일에서 이 member.js를 require함
// 그러면 그 require가 이 아래에 module.exports 에 해당되는 녀석을 반환함.
module.exports = router;