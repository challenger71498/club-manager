const express = require('express');
const mysql = require('../libs/mysql');
const passport = require('../libs/passport');
const Message = require('../libs/message');

const router = express.Router();

router.use('/:board_idx/documents', require('./document'));

//   경로가 '/'이고 GET 방식으로 요청했을 때
router.use(mysql.use());

router.get('/', async (req, res, next) => {
    let items = await req.mysql.query(
        'SELECT * FROM `board`'
    );
    res.send({items});
});
router.get('/:idx(\\d+)', async (req, res, next) => {

    let idx = parseInt(req.params.idx);
    let result = await req.mysql.query(
        'SELECT * FROM `board` WHERE idx=?',
        [idx]
    );
    res.send(result[0]);
});

router.post('/', passport.jwt(), async (req, res, next) => {
    if (req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let { type, name } = req.body;

    type = (type === 'gallery') ? 'GALLERY' : 'LIST';

    let result1 = await req.mysql.query(
        'INSERT INTO `board` (`type`,`name`) VALUES (?, ?)',
        [type, name]
    );
    let result2 = await req.mysql.query(
        'SELECT * FROM `board` WHERE idx=?',
        [result1.insertId]
    );
    res.send(result2[0]);
});

router.patch('/:idx(\\d+)', passport.jwt(),async (req, res, next) => {
    let idx = parseInt(req.params.idx);
    if (req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let { type, name } = req.body;

    type = (type === 'gallery') ? 'GALLERY' : 'LIST';

    let result1 = await req.mysql.query(
        'UPDATE board SET type=?, name=? WHERE idx=?',
        [type, name, idx]
    );
    let result2 =await req.mysql.query(
        'SELECT * FROM `board WHERE idx=?',
        [idx]
    );
    res.send(result2[0]);
});

//   경로가 '/숫자'이고 DELETE 방식으로 요청했을 때
router.delete('/:idx(\\d+)', passport.jwt(), async (req, res, next) => {
    if (req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let idx = parseInt(req.params.idx);
    let result = await req.mysql.query(
        'DELETE FROM board WHERE idx=?',
        [idx]
    );
    res.send(true);
});
module.exports=router;