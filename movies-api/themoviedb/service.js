var request = require('request');

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
}


module.exports = MovieDB;