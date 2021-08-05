var request = require('request');

// TODO: replace
const API_KEY = '825f79451255ce112042331fc0cb7c03';

class MovieDB {
    static search(query) {
        var options = {
            'method': 'GET',
            'url': `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`,
            'headers': {
            }
        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
            return response.body;
        });
    }

    static top() {
        var options = {
            'method': 'GET',
            'url': `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
            'headers': {
            }
        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
            return response.body;
        });

    }
}


module.exports = MovieDB;