var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gift', { title: 'Search Results for Gift' });
});

module.exports = router;