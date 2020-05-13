import React, { Fragment, useState } from 'react'
import AddMovie from './AddMovies'
import MovieService from '../MovieService'
import MoviePosterDetailed from '../MoviePosterDetailed'


import { Grid, Button, Checkbox } from 'semantic-ui-react'



const MovieAdmin = () => {
    const [addedMovie, setAddedMovie] = useState([{}]);
    const [isLoading, setIsLoading] = useState(true);

    const onAddMovieClick = (id) => {
        console.log('Clicked add movies ' + id);
        MovieService.AddMovie(id).then(result => {
            console.log('Added movie')
            setAddedMovie(result);
            setIsLoading(false)
        }).catch(err => {
            console.error(err)
        })
    }

    const MovieBody = () => {
        return (
            <Fragment>
                {(isLoading || addedMovie.ReleaseDate == undefined) ? 'Loading'
                    : <Grid.Column>
                        <MoviePosterDetailed className="card-home"
                            name={addedMovie.Name}
                            runtime={addedMovie.RunTime}
                            releasedDate={addedMovie.ReleaseDate.date}
                            poster={addedMovie.Poster}
                            genres={addedMovie.Genres}
                            omdb={addedMovie.Omdb}
                            id={addedMovie.id} />
                    </Grid.Column>
                }
            </Fragment>
        )
    }

    return (
        <Fragment>
            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <AddMovie onSubmit={onAddMovieClick} />

                    </Grid.Column>
                    <Grid.Column>
                        <MovieBody />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Fragment>
    )

}

export default MovieAdmin