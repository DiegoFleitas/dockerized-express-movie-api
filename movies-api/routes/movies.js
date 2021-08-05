var express = require('express');
var router = express.Router();

/* request movies to themoviedb.org. */
router.get("/movies", function (req, res) {
    // db.Movie.findAll()
    //     .then(movies => {
    //         res.status(200).send(JSON.stringify(movies));
    //     })
    //     .catch(err => {
    //         res.status(500).send(JSON.stringify(err));
    //     });
});

module.exports = router;