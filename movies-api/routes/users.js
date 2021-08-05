var express = require('express');
var router = express.Router();

var db = require('../db/database.js');
var User = require('../db/tables/user');
var Favorito = require('../db/tables/favorito');

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/* register a new user. */
router.post('/register', function (req, res, next) {
    try {
        const email = req.body.email;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const password = req.body.password;
        if (email && firstName && lastName && password) {
            const user = new User(email, firstName, lastName, password);
            const exists = db.where('users', 'email', email);
            if (exists) {
                res.status(403).send('user already exists.');
            } else {
                db.insert('users', user);
                res.status(200).send('user registered.');
            }
        }
        res.status(400).send('user data missing.');
    } catch (err) {
        console.log(err);
        res.status(500).send('server error.');
    }
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
