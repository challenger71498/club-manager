const express = require('express');
const mysql = require('../libs/mysql');
const Message = require('../libs/message');
const router = express.Router();

router.get('/recent',mysql.use(),async(req,res,next)=>{
   let count = parseInt(req.query.count) || 10;
   let result=req.mysql.query(
       'SELECT * FROM `document` WHERE ORDER BY `register_date` DESC LIMIT ?',
       [count]
   );
   res.send({items:result});
});

module.exports = router;