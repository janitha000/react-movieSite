import React, { Fragment } from 'react'
import { Dropdown, Menu, Button } from 'semantic-ui-react'
import { UseAuth } from '../Contexts/Auth-Context';
import {Login, Logout} from '../Services/AuthService'
import { Link } from 'react-router-dom'


const HeaderAuth = () => {
    // const [isAuthenticated] = UseAuth();
    // const [profile] = UseAuth();
    const { isAuthenticated, profile} = UseAuth();
    // const [state, dispatch] = context


    let body = (!isAuthenticated) ?
        <Fragment>
            <Menu.Item position='right'>
                <Button primary>Sign up</Button>


                <Button onClick={Login} style={{ marginLeft: '0.5em' }}>Log-in</Button>
            </Menu.Item>

        </Fragment>
        :
        <Menu.Item position='right'>
            <Dropdown item text={profile.nickname}>
                <Dropdown.Menu>
                    <Dropdown.Header onClick={Logout}>LogOut</Dropdown.Header>
                    <Dropdown.Item as={Link} to='/profile'>User Profile</Dropdown.Item>
                    <Dropdown.Item>Medium</Dropdown.Item>
                    <Dropdown.Item>Large</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>

    return (body)
}

export default HeaderAuth;