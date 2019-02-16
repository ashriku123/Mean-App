var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/foo', function(req, res, next) {
  res.render('index', { title: 'Asutosh is foo' });
});

/* GET home page. */
router.get('/papa', function(req, res, next) {
  res.send({name:"Papa",age:20})
});

/*not actually deleting though
*
* is just matchihng urls with the funcction name*/
/* Delete home page. */
router.delete('/papa', function(req, res, next) {
  res.send({name:"Papa",age:"Yo!"})
});

//express js it implemts the middleware

module.exports = router;
