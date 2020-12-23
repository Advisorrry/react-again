import React from 'react'
import h from './Header.module.css'
import {NavLink} from "react-router-dom";
import cyberpunk from '../../assets/img/Cyberpunk2077.svg'



export const Header = () => {
    return (
        <div>
            <header className={h.header}>
                <NavLink to="/profile"><img alt='logo' src={cyberpunk} /></NavLink>



            </header>
        </div>
    )
}

