const jwt = require('jsonwebtoken');
const config = require('./config');

module.exports = {
    sign (data) {
        return jwt.sign(data, config.jwt.secret, { expiresIn: config.jwt.expire })
    }
};