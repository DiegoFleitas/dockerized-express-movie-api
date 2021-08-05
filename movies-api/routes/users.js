var express = require('express');
var router = express.Router();

var db = require('../db/database.js');
var User = require('../db/tables/user');
var Favorito = require('../db/tables/favorito');

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/* register a new user. */
router.post('/register', function(req, res, next) {
  res.send('respond with a resource');
});

/* authenticate user. */
router.post('/login', function (req, res, next) {
    res.send('respond with a resource');
});

/* add movie to user favorites. */
router.post('/add/favorite', function (req, res, next) {
    res.send('respond with a resource');
});

/* fetch user favorite movies. */
router.get('/fetch/favorite', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
