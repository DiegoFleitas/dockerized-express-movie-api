var express = require('express');
var router = express.Router();
var TheMovieDB = require('../themoviedb/service.js');

/* request movies to themoviedb.org. */
router.get("/", function (req, res) {
    // TODO: check user auth
    const query = req.params.keyword;
    if (query) {
        TheMovieDB.search(query)
            .then(movies => {
                // TODO: show movies ordered by suggestionScore
                res.status(200).send(JSON.stringify(movies));
            })
            .catch(err => {
                res.status(500).send(JSON.stringify(err));
            });
    } else {
        TheMovieDB.top()
            .then(movies => {
                // TODO: show movies ordered by suggestionScore
                res.status(200).send(JSON.stringify(movies));
            })
            .catch(err => {
                res.status(500).send(JSON.stringify(err));
            });
    }
});

module.exports = router;