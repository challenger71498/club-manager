const express = require('express');
const mysql = require('../libs/mysql');
const passport = require('../libs/passport');
const Message = require('../libs/message');

const router = express.Router();

router.use('/:board_idx/documents', require('./document'));

//   경로가 '/'이고 GET 방식으로 요청했을 때
router.use(mysql.use());

router.get('/', async (req, res, next) => {
    let result = await req.mysql.query(
        'SELECT * FROM `board`'
    );
    res.send(result);
});
router.get('/:idx(\\d+)', async (req, res, next) => {

    let idx = parseInt(req.params.idx);
    let result = await req.mysql.query(
        'SELECT * FROM `board` WHERE idx=?',
        [idx]

    );
    res.send(result);
});

router.post('/', passport.jwt(), async (req, res, next) => {
    if (req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let { type, name } = req.body;

    type = (type === 'gallery') ? 'GALLERY' : 'LIST';

    let result = await req.mysql.query(
        'INSERT INTO `board` (`type`,`name`) VALUES (?, ?)',
        [type, name]
    );

    res.send(result);
});

router.patch('/:idx(\\d+)', passport.jwt(),async (req, res, next) => {
    let idx = parseInt(req.params.idx);
    if (req.member.level !== 0) {
        throw Message.NOT_GRANTED;
    }
    let { type, name } = req.body;

    type = (type === 'gallery') ? 'GALLERY' : 'LIST';

    let result = await req.mysql.query(
        'UPDATE board SET type=?, name=? WHERE idx=?',
        [type, name, idx]
    );
    res.send(`게시판 수정: ${idx}`);
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
    res.send(`게시판 삭제: ${idx}`);
});
module.exports=router;