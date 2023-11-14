import React from 'react'

import { BsFillMusicPlayerFill } from "react-icons/bs";

import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <h1 className='header__logo'>
            <Link to='/'>
                <em><BsFillMusicPlayerFill /></em>
                <span>Music<br /> Playlist</span>
            </Link>
        </h1>
    )
}

export default Logo