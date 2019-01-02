import React from 'react'

import './Logout.css';
import logoutPic from '../../asset/images.png';

const logout = (props) => {
    return(
    <img className="Logout" src={logoutPic} alt="Logout" onClick={props.logout}/>
    )
}

export default Logout;
