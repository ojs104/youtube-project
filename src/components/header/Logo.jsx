import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillTrophy } from "react-icons/ai";




const Logo = ({ toggleMenu }) => {
    return (
        <h1 className='header__logo'>
            <Link to='/'>
                <em onClick={toggleMenu}><AiFillTrophy /></em>
                <span>football<br />youtube</span>
            </Link>
        </h1>
    )
}

export default Logo