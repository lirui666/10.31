var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'xcaliruiqq666',
  database:'xinwen'
});

router.get('/list', function(req, res, next) {
	connection.query('SELECT id,name FROM xinwen1',function(err, rows, fields){
	console.log(rows)
	   res.header('Access-Control-Allow-Origin',"*")
       res.send(rows)
	})
});


router.post('/datail', function(req, res, next) {
	var id=req.body.id;
	connection.query('SELECT name,lirui FROM xinwen1 where id='+id,function(err, rows, fields){
	console.log(rows)
	 		 res.header('Access-Control-Allow-Origin',"*")
       res.send(rows)
   })
})
module.exports = router;