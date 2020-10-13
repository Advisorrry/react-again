import React from 'react'
import n from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className={n.navList}>
            <ul className={n.item}>
                <li><NavLink to='/profile'>Profile </NavLink></li>
                <li><NavLink to='/dialogs'>Messages </NavLink></li>
                <li><NavLink to='#s'>News </NavLink></li>
                <li><NavLink to='#s'>Music </NavLink></li>
                <li><NavLink to='/users'>Users</NavLink></li>
                <li><NavLink to='#s'>Settings </NavLink></li>
            </ul>
        </div>
    )
}

