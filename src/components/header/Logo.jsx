import React from 'react'
import { Link } from 'react-router-dom';
import { BiSolidCameraMovie } from "react-icons/bi";



const Logo = ({ toggleMenu }) => {
    return (
        <h1 className='header__logo'>
            <Link to='/'>
                <em onClick={toggleMenu}><BiSolidCameraMovie /></em>
                <span>football<br />youtube</span>
            </Link>
        </h1>
    )
}

export default Logo