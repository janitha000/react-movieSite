import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


const CommonLoader = () => {

    // return (
    //     <Segment>
    //         <Dimmer active>
    //             <Loader />
    //         </Dimmer>

    //         <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    //     </Segment>
    // )

    return (
        <Loader active inline='centered' />

    )

}

export default CommonLoader;
