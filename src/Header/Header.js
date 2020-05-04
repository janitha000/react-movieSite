import React, { Fragment, useState } from 'react'
import { Menu, Button, Segment, Visibility } from 'semantic-ui-react'
import MenuItemComp from '../Header/MenuItem'
import HeaderAuth from './HeaderAuth'
import { useHistory, Link } from 'react-router-dom'


const Header = () => {
    const [activeItem, setActiveItem] = useState('');
    let history = useHistory();

    const handleItemClick = (e, { name }) => setActiveItem(name)

    const handleMovieClick = ((e, { name }) => {   
        console.log('Clicked movie')   
        setActiveItem(name)

    })

    return (
        <div >
             <Segment inverted vertical style={{ minHeight: 50 }}>
                <Menu  inverted secondary pointing >
                    <Menu.Item header as={Link} to='/' onClick={() => setActiveItem('')}>Janitha Movies</Menu.Item>
                    <MenuItemComp name={"Movies"} parentOnClick={handleMovieClick} activeItem ={activeItem} path={"/movies"} />
                    <MenuItemComp name={"CoVid-19"} parentOnClick={handleItemClick} activeItem ={activeItem} path={"/covid"}/>
                    <MenuItemComp name={"Reviews"} parentOnClick={handleItemClick} activeItem ={activeItem} />

                    <HeaderAuth />
                    
                </Menu>
            </Segment>



        </div >
    )
}

export default Header;