const passport = require('passport');
const passportJwt = require('passport-jwt');
const mysql = require('./mysql');
const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
const config = require('./config');

const options = {
    jwtFromRequest: ExtractJwt.fromHeader('x-token'),
    secretOrKey: config.jwt.secret,
};

passport.use(new JwtStrategy(options, function (payload, done) {
    mysql.pool.getConnection().then(connection => {
        let idx = payload.idx;

        connection.query('SELECT * FROM `member` WHERE `idx` = ?', [ idx ]).then(result => {
            let member = result[0];
            if (!member) return done (null, false);

            done(null, member);
        }).catch(err => {
            done(err, false);
        }).then(() => {
            connection.release();
        });
    });
}));

passport.jwt = () => passport.authenticate('jwt', { session: false });

module.exports = passport;