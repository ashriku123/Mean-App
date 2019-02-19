var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/get', function(req, res, next) {
  res.json({string:"Hey now"})
});

// POST method route
router.post('/post', function (req, res) {
  let user_name = req.body.name;
  res.json({string:`${user_name}`});
})
module.exports = router;
