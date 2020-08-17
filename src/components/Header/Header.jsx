import React from 'react'
import h from './Header.module.css'
import {NavLink} from "react-router-dom";



const Header = () => {
    return (
        <div>
            <header className={h.header}>
                <NavLink to="/profile"><img alt='logo' src={require('../../assets/img/logo.png')} /></NavLink>
            </header>
        </div>
    )
}

export default Header