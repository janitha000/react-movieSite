import React, { Fragment, useEffect } from 'react'
import {HandleAuthentication} from '../Services/AuthService'


const Auth = ({history}) => {
    HandleAuthentication(history);


    return(
        <Fragment>
            <h3>Logged in successfully. Ridirecting to previouse page ...</h3>
        </Fragment>
    )
}

export default Auth;