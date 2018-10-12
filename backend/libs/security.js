const crypto = require('crypto');
const config = require('./config');

module.exports = {
    sha512: function (text) {
        let hash = crypto.createHmac('sha512', config.security.key);
        hash.update(config.security.salt.prefix + text + config.security.salt.suffix);
        return hash.digest('hex');
    }
};