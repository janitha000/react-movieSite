import React from 'react'
import { Card, Label, Image } from 'semantic-ui-react'


const MoviePosterDetailed = ({ id, name, runtime, releasedDate, genres, poster, omdb, onClickParent }) => {
    const hours = Math.floor(runtime / 60)
    const minutes = runtime % 60
    const releaseYear = releasedDate.split('-')[0]

    const Genre = () => {
        let body = genres[0].name;
        let first = true
        genres.forEach(genre => {
            if (!first) {
                body = body + ', ' + genre.name
            } else {
                first = false;
            }

        })
        return (body)
    }

    return (
        <Card onClick={() => onClickParent(id)} raised='true'>
            <Image src={poster} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{name}({releaseYear})</Card.Header>
                <Card.Meta>
                    <span className='date'>{hours}hrs {minutes}mins</span>
                    {(omdb) ? <Label as='a' image>
                        {omdb.Rate}
                    </Label> : ''}
                    <div>
                        IMDB Rating :
                        {(omdb) ? 
                        <Label circular color={getColor(omdb.IMDB)}>
                            {omdb.IMDB}
                        </Label> : '' }
                    </div>

                </Card.Meta>
            </Card.Content>
            <Card.Content extra>

                <Genre />

            </Card.Content>
        </Card>
    )
}

const getColor = (rat) => {
    let rating = parseFloat(rat);
    if (rating < 3.9) {
        return 'red'
    } else if (rating < 4.9) {
        return 'orange'
    } else if (rating < 6.9) {
        return 'yellow'
    }
    else if (rating < 7.9) {
        return 'olive'
    }
    else {
        return 'green'
    }
}


export default MoviePosterDetailed