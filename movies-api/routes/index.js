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
  const newFavorito = new Favorito('ruben.rada@gmail.com', false,
      null,
      [35, 18],
      63066,
      "es",
      "25 Watts",
      "24 hours in the life of three street youths in Montevideo. Three teenage guys try to figure out what they're " +
      "supposed to be doing with their lives in this drama from Uruguay that puts the emphasis on character over " +
      "narrative.",
      1.193,
      "/cSuy4RgmLZmfZXyMAyDA07PkBPo.jpg",
      "2001-01-01",
      "25 Watts",
      false,
      6.7,
      20
  );
  db.insert('favoritos', newFavorito);
  res.render('index', { title: 'success' });
});

router.get("/test/users/add", function (req, res) {
  const newUser = new User('diego.forlan@gmail.com', 'Diego', 'Forlan', 'cachavacha10');
  db.insert('users', newUser);
  res.render('index', { title: 'success' });
});

router.get("/test/users/remove", function (req, res) {
  const userToDelete = new User('ruben.rada@gmail.com', 'Ruben', 'Rada', 'nillantonipena');
  db.delete('users', userToDelete);
  res.render('index', { title: 'success' });
});

module.exports = router;
