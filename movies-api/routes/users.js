var express = require('express');
var router = express.Router();

/* register a new user. */
router.post('user/register', function(req, res, next) {
  res.send('respond with a resource');
});

/* authenticate user. */
router.post('user/login', function(req, res, next) {
  res.send('respond with a resource');
});

/* add movie to user favorites. */
router.post('user/add/favorite', function(req, res, next) {
  res.send('respond with a resource');
});

/* fetch user favorite movies. */
router.get('user/fetch/favorite', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
