const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const passport = require('../libs/passport');
const Message = require('../libs/message');

router.use(bodyParser.json());
router.use(passport.initialize({
    userProperty: 'member'
}));
router.use('/members', require('./member'));
router.use('/notices', require('./notice'));
router.use('/boards', require('./board'));
router.use('/histories', require('./history'));
router.use('/bylaws', require('./bylaw'));
router.use('/studies', require('./study'));
router.use('/groups', require('./group'));
router.use('/projects', require('./project'));
router.use('/documents', require('./documents'));

router.use((req, res, next) => {
    next(Message.API_NOT_FOUND);
});

router.use((err, req, res, next) => {
    if (err instanceof Message) {
        res.status(err.status).send({
            code: err.code,
            message: err.message
        });
        return;
    }

    next(err);
});

router.use((err, req, res, next) => {
    console.error(err);

    res.status(500).send({
        code: 'Unknown',
        message: '알 수 없는 오류가 발생했습니다.'
    });
});

module.exports = router;