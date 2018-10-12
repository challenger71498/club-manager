const express = require('express');
const mysql = require('../libs/mysql');
const Message = require('../libs/message');
const router = express.Router();

router.get('/recent', mysql.use(), async (req, res, next) => {
   let count = parseInt(req.query.count) || 10;
   let items = await req.mysql.query(
       'SELECT * FROM `document` ORDER BY `register_date` DESC LIMIT ?',
       [ count ]
   );
   res.send({ items });
});

module.exports = router;