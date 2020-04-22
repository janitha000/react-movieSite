import React, { useState, useEffect } from 'react'
import { Accordion, Icon, Card, Container, Divider, Label } from 'semantic-ui-react'
import Actors from './Actors/Actors'
import * as Constants from '../Util/Constants'
import MovieService from './MovieService'
import KeyPhrases from './KeyPhrases'
import Loader from '../Common/Loader'




const MovieSummary = ({ id, overview, directors, actors, writers }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [keyPhrases, setKeyPhrases] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        MovieService.getKeyPhrases(id, overview)
            .then(result => {
                setKeyPhrases(result);
                setIsLoading(false);
                console.log(result)
            })


    }, [])


    const handleClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex)
    }

    const Directors = () => {
        let body = ''
        if (directors) {
            body = directors[0].name;
            let first = true
            directors.forEach(director => {
                (!first) ? body = body + ', ' + director.name : first = false;
            })
        }
        return (body)
    }

    const Writers = () => {
        let body = ''
        if (writers) {
            body = writers[0].name;
            let first = true
            writers.forEach(director => {
                (!first) ? body = body + ', ' + director.name : first = false;
            })
        }
        return (body)
    }

    const ActorsPage = () => {
        let actorsBody = [];
        actors.forEach(actor => {

            actor.poster = (actor.people_image == "" || actor.people_image == undefined) ? "" : `${Constants.MOVIE_POSTER_HOME}${actor.people_image}`
            actorsBody.push(<Actors actor={actor} />)
        })

        return actorsBody;
    }


    return (
        <div>
            <Container >
                <Card fluid>
                    <Card.Content>
                        <Card.Header>Summary</Card.Header>
                        <Card.Meta>
                            <p>{overview}</p>
                            <Divider />
                            <p>Directors <Directors /></p>
                            <span><p>Writers <Writers /></p></span>
                        </Card.Meta>
                    </Card.Content>

                </Card>

                {(isLoading || keyPhrases.lengh == 0) ? <Loader /> :
                    <Card fluid>
                        <Card.Content>
                            <Card.Meta>
                                <KeyPhrases keyPhrases={keyPhrases} />

                    </Card.Meta>
                        </Card.Content>

                    </Card>
                    }
                    <Accordion fluid styled>
                        <Accordion.Title
                            active={activeIndex === 0}
                            index={0}
                            onClick={handleClick}
                        >
                            <Icon name='dropdown' />
                     Actors
                    </Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                            <div className='actors'> <ActorsPage /></div>

                        </Accordion.Content>

                        <Accordion.Title
                            active={activeIndex === 1}
                            index={1}
                            onClick={handleClick}
                        >
                            <Icon name='dropdown' />
  What kinds of dogs are there?
</Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                            <p>
                                There are many breeds of dogs. Each breed varies in size and
                                temperament. Owners often select a breed of dog that they find to be
                                compatible with their own lifestyle and desires from a companion.
  </p>
                        </Accordion.Content>

                        <Accordion.Title
                            active={activeIndex === 2}
                            index={2}
                            onClick={handleClick}
                        >
                            <Icon name='dropdown' />
  How do you acquire a dog?
</Accordion.Title>
                        <Accordion.Content active={activeIndex === 2}>
                            <p>
                                Three common ways for a prospective owner to acquire a dog is from
                                pet shops, private owners, or shelters.
  </p>
                            <p>
                                A pet shop may be the most convenient way to buy a dog. Buying a dog
                                from a private owner allows you to assess the pedigree and
                                upbringing of your dog before choosing to take it home. Lastly,
                                finding your dog from a shelter, helps give a good home to a dog who
                                may not find one so readily.
  </p>
                        </Accordion.Content>
                    </Accordion>
            </Container>

        </div>

    )
}

export default MovieSummary;