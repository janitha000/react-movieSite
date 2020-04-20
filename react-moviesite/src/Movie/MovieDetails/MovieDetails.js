import React, { Fragment, useState, useEffect } from 'react'
import Loader from '../../Common/Loader'
import MovieService from '../MovieService'
import MoviePosterDetailed from '../MoviePosterDetailed'
import MovieSummary from '../MovieSummary'
import { Grid, Image } from 'semantic-ui-react'
import './MovieDetails.css'



const MovieDetails = ({ id }) => {
    const [movieDetails, setMovieDetails] = useState({});
    const [omdbDetails, setOMDBDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        MovieService.getMoviesById(id)
            .then(result => {
                MovieService.getOmdbMovieDetails(id, result.Name).then(res => {
                    setMovieDetails(result);
                    setOMDBDetails(res);
                    setIsLoading(false);
                })
                
            })


    }, [])


    return (

        <div className="main-grid">
            {(isLoading || movieDetails.lengh == 0) ? <Loader /> :
                <Grid celled>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <MoviePosterDetailed
                                name={movieDetails.Name}
                                runtime={movieDetails.RunTime}
                                releasedDate={movieDetails.ReleaseDate.date}
                                poster={movieDetails.Poster}
                                genres={movieDetails.Genres}
                                omdb = {omdbDetails} />
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <MovieSummary 
                            id={id}
                            overview={movieDetails.OverView}
                            directors = {movieDetails.Directors}
                            writers = {movieDetails.Writers}
                            actors = {movieDetails.Actors}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            }



        </div>
    )
}

export default MovieDetails;