import * as Constants from '../Util/Constants'
import MovieDetails from './MovieDetails/MovieDetails';

const MovieService = {
    getMoviesById: (movieId) => {
        return new Promise((resolve, reject) => {
            let movieUrl = `${Constants.GET_MOVIE_BY_ID}${movieId}`
            fetch(movieUrl).then(res => res.json()).then(result => {
                let movieObject = GenaralisedMovieObject(result);
                resolve(movieObject)
            })
        })

    }

}

const GenaralisedMovieObject = (movieData) => {
    if (movieData) {
        let data = movieData.data;

        let englishTranslation = getEnglishTranslation(data.translations);
        let poster = getMoviePoster(data.artworks)

        let movie = {
            Name: englishTranslation.name,
            OverView: englishTranslation.overview,
            RunTime: data.runtime,
            Genres: data.genres,
            ReleaseDate: data.release_dates[0],
            People: data.people,
            Poster : `${Constants.MOVIE_POSTER_HOME}${poster}`
        }

        return movie;
    }
    else {
        return {};
    }


}

const getEnglishTranslation = (translations) => {
    let englishTranslation;
    for(let i =0; i < translations.length; i++){
        if(translations[i].language_code == "eng"){
            englishTranslation = translations[i]
            break;
        }
    }

    return englishTranslation;
}

const getMoviePoster = (posters) => {
    let poster = posters[0].url
    for(let i =0; i < posters.length; i++){
        if(posters[i].height == 1000){
            poster = posters[i].url
            break;
        }
    }

    return poster;
}

export default MovieService;