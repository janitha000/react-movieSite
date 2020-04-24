import React from 'react'
import { Label, Icon, Image } from 'semantic-ui-react'


const KeyPhrases = ({ keyPhrases }) => {
    let body = [];
    if (keyPhrases.length) {
        keyPhrases.forEach(element => {
            body.push(<KeyPhrase style={{marginBottom: "3px"}}  text={element} /> )
        });
    }


    return (body)
}

const KeyPhrase = ({ text }) => {
    return (
        <Label as='a' image>
            {text}
        </Label>
    )
}

export default KeyPhrases;