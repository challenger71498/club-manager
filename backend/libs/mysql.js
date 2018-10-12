const mysql = require('promise-mysql');
const config = require('./config');
const pool = mysql.createPool(config.mysql);

module.exports = {
    pool,
    use: () => async (req, res, next) => {
        if (req.mysql) {
            return next();
        }

        let isReleased = false;
        let connection = await pool.getConnection();

        let release = function() {
            if (isReleased) return;
            connection.release();
            isReleased = true;
        };

        res.on('close', release);
        res.on('finish', release);

        req.mysql = new Proxy(connection, {
            get: (target, name) => {
                switch (name) {
                    case 'release':
                        return release;

                    default:
                        return target[name];
                }
            }
        });

        next();
    }
};