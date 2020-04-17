import React, { Fragment, useState, useEffect } from 'react'
import Loader from '../../Common/Loader'
import MovieService from '../MovieService'
import MoviePosterDetailed from '../MoviePosterDetailed'
import { Grid, Image } from 'semantic-ui-react'
import './MovieDetails.css'



const MovieDetails = ({ id }) => {
    const [movieDetails, setMovieDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        MovieService.getMoviesById(id)
            .then(result => {
                setMovieDetails(result);
                setIsLoading(false);
                console.log(result)
            })


    }, [])


    return (
        // <Fragment>
        //     {isLoading && <Loader />}
        //     {movieDetails.lengh != 0 && (
        //         <Grid celled>
        //             <Grid.Row>
        //                 <Grid.Column width={3}>
        //                     <MoviePosterDetailed name={movieDetails.Name} runtime={movieDetails.RunTime} releasedDate = {movieDetails.ReleaseDate.date}/>
        //                 </Grid.Column>
        //                 <Grid.Column width={13}>
        //                     This is Paragraph
        //                 </Grid.Column>
        //             </Grid.Row>
        //         </Grid>
        //     )}
        // </Fragment>

        <div className="main-grid">
            {(isLoading || movieDetails.lengh == 0) ? <Loader /> :
                <Grid celled>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <MoviePosterDetailed
                                name={movieDetails.Name}
                                runtime={movieDetails.RunTime}
                                releasedDate={movieDetails.ReleaseDate.date}
                                poster={movieDetails.Poster} />
                        </Grid.Column>
                        <Grid.Column width={13}>
                            This is Paragraph
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            }



        </div>
    )
}

export default MovieDetails;