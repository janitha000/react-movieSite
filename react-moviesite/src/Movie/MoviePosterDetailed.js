import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


const MoviePosterDetailed = ({ name, runtime, releasedDate, genres, poster }) => {
    const  hours = Math.floor(runtime / 60)
    const  minutes = runtime % 60
    const releaseYear = releasedDate.split('-')[0]

    return (
        <Card>
            <Image src={poster} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{name}({releaseYear})</Card.Header>
                <Card.Meta>
                    <span className='date'>{hours}hrs {minutes}mins</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
          </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user' />
            22 Friends
          </a>
            </Card.Content>
        </Card>
    )
}

export default MoviePosterDetailed