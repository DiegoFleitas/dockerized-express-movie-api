var express = require('express');
var router = express.Router();

var db = require('../db/database.js');
var User = require('../db/tables/user');
var Favorito = require('../db/tables/favorito');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/test/favoritos/add", function (req, res) {
  const newFavorito = new Favorito('1');
  db.insert('favoritos', newFavorito);
  res.render('index', { title: 'success' });
});

router.get("/test/users/add", function (req, res) {
  const newUser = new User('mail', 'firstname', 'lastname', 'password');
  db.insert('users', newUser);
  res.render('index', { title: 'success' });
});

router.get("/test/users/remove", function (req, res) {
  const userToDelete = new User('mail2', 'firstname', 'lastname', 'password');
  db.delete('users', userToDelete);
  res.render('index', { title: 'success' });
});

module.exports = router;
