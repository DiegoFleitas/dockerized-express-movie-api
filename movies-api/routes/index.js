var express = require('express');
var router = express.Router();

var db = require('../db/database.js');
var User = require('../db/tables/user');
var Favorito = require('../db/tables/favorito');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/test/favoritos", function (req, res) {
  const newFavorito = new Favorito('1');
  db.insert('favoritos', newFavorito);
  res.render('index', { title: 'success' });
});

router.get("/test/users", function (req, res) {
  const newUser = new User('mail', 'firstname', 'lastname', 'password');
  db.insert('users', newUser);
  res.render('index', { title: 'success' });
});

module.exports = router;
