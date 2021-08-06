var request = require('request');
var Movie = require('../db/tables/movie');

const API_KEY = '825f79451255ce112042331fc0cb7c03';

class MovieDB {
    static search(query) {
        return new Promise(resolve => {
            var options = {
                'method': 'GET',
                'url': `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`,
                'headers': {
                }
            };
            request(options, function (error, response) {
                if (error) console.log(error);
                resolve(response.body);
            });
        });
    }

    static top() {
        return new Promise(resolve => {
            var options = {
                'method': 'GET',
                'url': `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
                'headers': {
                }
            };
            return request(options, function (error, response) {
                if (error) console.log(error);
                resolve(response.body);
            });
        });
    }

    static withSuggestionScore(movies) {

        const moviesWithScore = [];
        movies.forEach(movie => {
            const movieWithScore = new Movie(
                movie.userEmail,
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
                movie.voteCount,
            );
            moviesWithScore.push(movieWithScore);
        });

        // sort by score descending
        moviesWithScore.sort(function (a, b) {
            if (a.suggestionScore > b.suggestionScore) {
                return -1;
            }
            if (a.suggestionScore < b.suggestionScore) {
                return 1;
            }
            return 0;
        });

        return moviesWithScore;
    }

}


module.exports = MovieDB;