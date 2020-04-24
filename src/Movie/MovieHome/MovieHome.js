import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import MoviePosterDetailed from '../MoviePosterDetailed'
import { Pagination, Grid, Header, Container, Divider, Label } from 'semantic-ui-react'
import MovieService from '../MovieService'

import Loader from '../../Common/Loader'
import './MovieHome.css'


const MovieHome = () => {
    const [movieList, setMovieList] = useState([{}]);
    const [isLoading, setIsLoading] = useState(true);
    const [activePage, setActivePage] = useState(1);

    let history = useHistory();


    useEffect(() => {
        MovieService.getMovieList(1)
            .then(result => {
                console.log('Movie List Recieved');
                setMovieList(result);
                setIsLoading(false)
            })

    }, [])

    const handlePaginationChange = (e, { activePage }) => {
        console.log('Active page ' + activePage)
        setActivePage(activePage)
    }

    const routeChange=(id)=> {
         let path = `movies/${id}`;
        // let path = `movies/123`;
         history.push(path)
        console.log(id)
      }

    const MovieList = () => {
        let body = [];
        for (let i = activePage-1 ; i < activePage + 2; i++) {
            body.push(
                <Grid.Column>
                    <MoviePosterDetailed className="card-home"
                        name={movieList[i].Name}
                        runtime={movieList[i].RunTime}
                        releasedDate={movieList[i].ReleaseDate.date}
                        poster={movieList[i].Poster}
                        genres={movieList[i].Genres}
                        omdb={movieList[i].Omdb}
                        id={movieList[i].id}
                        onClickParent={routeChange} />
                </Grid.Column>
            )
        }

        return body;
    }

    return (
        <Container>
            {(isLoading || movieList.lengh == 0) ? <Loader /> :
                <div className="card-home">
                    <Grid columns={3} divided>
                        <Grid.Row>
                            <MovieList />
                        </Grid.Row>

                    </Grid>


                    <Pagination
                        boundaryRange={0}
                        defaultActivePage={1}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={500}
                        onPageChange={handlePaginationChange}
                    />
                </div>
            }

        </Container>
    )
}

export default MovieHome;