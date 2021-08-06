class Favorito {
    constructor(userEmail, suggestionScore, adult, backdropPath, genreIds, id, originalLanguage, originalTitle,
                overview, popularity, posterPath, releaseDate, title, video, voteAverage, voteCount
    ) {
        this.userEmail = userEmail;
        this.suggestionScore = suggestionScore;
        this.adult = adult,
        this.backdropPath = backdropPath,
        this.genreIds = genreIds,
        this.id = id,
        this.originalLanguage = originalLanguage,
        this.originalTitle = originalTitle,
        this.overview = overview,
        this.popularity = popularity,
        this.posterPath = posterPath,
        this.releaseDate = releaseDate,
        this.title = title,
        this.video = video,
        this.voteAverage = voteAverage,
        this.voteCount = voteCount,
        this.addedAt = new Date();
    }
}

module.exports = Favorito;