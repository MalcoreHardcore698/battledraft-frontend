import React from 'react'
import { NavLink } from 'react-router-dom'

import Logo from './../../img/logo.png'

export const Logotype = ({ isAuthenticated, setTitleOfPage }) => {
    return (
        <div className="bd-headline__logotype">
            <NavLink
                to="/"
                onClick={() => setTitleOfPage((!isAuthenticated) ? 'Authentication' : 'Tournaments')}
            >
                <img src={Logo} alt="Logotype" />
            </NavLink>
        </div>
    )
}