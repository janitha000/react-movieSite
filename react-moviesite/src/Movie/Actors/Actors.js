import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import './Actors.css'


const Actors = ({ actor }) => {
  let imagePoster = (actor.poster == '' || actor.poster == undefined) ? 'https://react.semantic-ui.com/images/avatar/large/matthew.png' : actor.poster  

  return (
    
      <Card>
        <img src={imagePoster} height={225} width={150}/>
        {/* <Image src={imagePoster} wrapped ui={false} /> */}
        {/* <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} /> */}
        <Card.Content>
          <Card.Header>{actor.name}</Card.Header>
          <Card.Meta>
            <span className='date'>{actor.role}</span>
          </Card.Meta>

        </Card.Content>


      </Card>

  )
}

export default Actors;