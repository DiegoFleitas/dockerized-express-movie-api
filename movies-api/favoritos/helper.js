var Favorito = require('../db/tables/favorito');

class FavoritosHelper {
    static withSuggestionScore(movies) {
        const moviesWithScore = [];
        movies.forEach(movie => {
            const movieWithScore = new Favorito(
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
            if (a.suggestionForTodayScore > b.suggestionForTodayScore) {
                return -1;
            }
            if (a.suggestionForTodayScore < b.suggestionForTodayScore) {
                return 1;
            }
            return 0;
        });

        return moviesWithScore;
    }
}

module.exports = FavoritosHelper;