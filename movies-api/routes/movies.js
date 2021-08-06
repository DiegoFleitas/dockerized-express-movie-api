var express = require('express');
var router = express.Router();

var db = require('../db/database.js');
var auth = require('../auth/helper.js');
var User = require('../db/tables/user');
var Favorito = require('../db/tables/favorito');
var TheMovieDB = require('../themoviedb/service.js');

/* request a movie list to themoviedb.org. */
router.get("/", function (req, res) {
    try {
        if (!req.headers.authorization) {
            return res.status(403).send('missing authorization header');
        }
        const token = req.headers.authorization;
        if (auth.tokenIsValid(token)) {
            const keyword = req.query.keyword;
            if (keyword) {
                console.log('search');
                TheMovieDB.search(keyword)
                    .then(response => {
                        const parsed = JSON.parse(response);
                        const movies = parsed.results;
                        if (movies) {
                            const moviesByScore = TheMovieDB.withSuggestionScore(movies);
                            return res.status(200).json(moviesByScore);
                        } else {
                            return res.status(400).send('something went wrong getting movies :(');
                        }
                    })
                    .catch(err => {
                        console.log('search error', err);
                        return res.status(500).send(err);
                    });
            } else {
                console.log('top');
                TheMovieDB.top()
                    .then(response => {
                        const parsed = JSON.parse(response);
                        const movies = parsed.results;
                        if (movies) {
                            const moviesByScore = TheMovieDB.withSuggestionScore(movies);
                            return res.status(200).json(moviesByScore);
                        } else {
                            return res.status(400).send('something went wrong getting movies :(');
                        }
                    })
                    .catch(err => {
                        console.log('top error', err);
                        return res.status(500).send(err);
                    });
            }
        } else {
            return res.status(401).send('unauthorized');
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send('server error.');
    }
});

module.exports = router;