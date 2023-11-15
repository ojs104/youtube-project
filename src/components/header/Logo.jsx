import React from 'react'

import { BiSolidCameraMovie } from "react-icons/bi";


import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <h1 className='header__logo'>
            <Link to='/'>
                <em><BiSolidCameraMovie /></em>
                <span>영화리뷰 <br /> 유튜버</span>
            </Link>
        </h1>
    )
}

export default Logo