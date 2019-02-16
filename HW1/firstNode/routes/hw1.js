var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/get', function(req, res, next) {
  res.send({string:"Hey now"})
});

// POST method route
router.post('/post', function (req, res) {
  var user_name = req.param('name');
  res.send("Hey " + user_name);
})
module.exports = router;
