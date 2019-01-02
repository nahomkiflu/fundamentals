import React from 'react';

import './Navbar.css';
import piePic from '../../asset/download.jpg';
import Logout from './Logout/Logout';

const Navbar = (props) => {
    return(
        <nav className="App">
            <img src={piePic} alt ="Pie Pic"/>
            <Logout/>
        </nav>
    )
}

export default Navbar;