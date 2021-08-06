var express = require('express');
var router = express.Router();

var db = require('../db/database.js');
var auth = require('../auth/helper.js');
var favoritosHelper = require('../favoritos/helper');
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
                return res.status(403).send('user already exists.');
            } else {
                db.insert('users', user);
                return res.status(200).send('user registered.');
            }
        }
        return res.status(400).send('user data missing.');
    } catch (err) {
        console.log(err);
        return res.status(500).send('server error.');
    }
});

/* authenticate user. */
router.post('/login', function (req, res, next) {
    try {
        const email = req.body.email;
        const password = req.body.password;
        if (email && password) {
            if (auth.checkCredentials(email, password)) {
                const user = db.where('users', 'email', email);
                const token = auth.generateToken(user.email);
                return res.status(200).send(token);
            } else {
                return res.status(403).send('bad credentials.');
            }
        }
        return res.status(400).send('login data missing.');
    } catch (err) {
        console.log(err);
        return res.status(500).send('server error.');
    }
});

/* add movie to user favorites. */
router.post('/add/favorite', function (req, res, next) {
    try {
        if (!req.headers.authorization) {
            return res.status(403).send('missing authorization header');
        }
        const token = req.headers.authorization;
        if (auth.tokenIsValid(token)) {

            const movie = req.body;
            if (movie) {
                const user = auth.getUserByToken(token);
                const favorito = new Favorito(
                    user.email,
                    movie.suggestionScore,
                    movie.adult,
                    movie.backdropPath,
                    movie.genreIds,
                    movie.id,
                    movie.originalLanguage,
                    movie.originalTitle,
                    movie.overview,
                    movie.popularity,
                    movie.posterPath,
                    movie.releaseDate,
                    movie.title,
                    movie.video,
                    movie.voteAverage,
                    movie.voteCount
                );
                db.insert('favoritos', favorito);
                return res.status(200).send('favorite added!');
            }
            return res.status(400).send('favorite data missing.');
        } else {
            return res.status(401).send('unauthorized');
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send('server error.');
    }
});

/* fetch user favorites. */
router.get('/favorites', function (req, res, next) {
    try {
        if (!req.headers.authorization) {
            return res.status(403).send('missing authorization header');
        }
        const token = req.headers.authorization;
        if (auth.tokenIsValid(token)) {
            const movie = req.body;
            if (movie) {
                const user = auth.getUserByToken(token);
                const favorites = db.where('favoritos', 'userEmail', user.email);
                const favoritosByScore = favoritosHelper.withSuggestionScore(favorites);
                return res.status(200).json(favoritosByScore);
            }
            return res.status(400).send('favorite data missing.');
        } else {
            return res.status(401).send('unauthorized');
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send('server error.');
    }
});

module.exports = router;
