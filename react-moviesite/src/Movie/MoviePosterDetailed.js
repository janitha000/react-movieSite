import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


const MoviePosterDetailed = ({ name, runtime, releasedDate, genres, poster }) => {
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
        <Card raised='true'> 
            <Image src={poster} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{name}({releaseYear})</Card.Header>
                <Card.Meta>
                    <span className='date'>{hours}hrs {minutes}mins</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>

                <Genre />

            </Card.Content>
        </Card>
    )
}

export default MoviePosterDetailed