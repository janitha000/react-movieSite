import React, { Fragment } from 'react'
import { Dropdown, Menu, Button, Segment } from 'semantic-ui-react'
import {Login} from '../Services/AuthService'


const LoginPage = () => {
    return (
        <Fragment>
            <h3> Please login to view this page</h3>
            <Button onClick={Login} style={{ marginLeft: '0.5em' }}>Log-in</Button>
        </Fragment>

    )
}

export default LoginPage;