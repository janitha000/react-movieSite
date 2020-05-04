import React, { Fragment } from 'react'
import { Menu, Button, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



const MenuItemComp = ({ name, activeItem, parentOnClick, path }) => {

    return (
        <Fragment>
            <Menu.Item as={Link} to={path}
                name={name}
                active={activeItem === name}
                onClick={parentOnClick}
            >
                {name}
            </Menu.Item>
        </Fragment>

    )
}

export default MenuItemComp;