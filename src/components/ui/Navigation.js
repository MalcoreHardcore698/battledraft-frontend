import React from 'react'
import { NavLink } from 'react-router-dom'

import Logo from './../../img/logo.png'

export const Navigation = ({ isAuthenticated, setAuthenticated, setTitleOfPage }) => {
    const handlerSubmit = () => {
        setTitleOfPage('Authentication')
        setAuthenticated(false)
    }
    
    return (
        <div className="bd-headline__navigation">
            <div className="logotype"><NavLink
                to="/"
                onClick={() => setTitleOfPage((!isAuthenticated) ? 'Authentication' : 'Tournaments')}
            >
                <img src={Logo} alt="Logotype" />
            </NavLink></div>
            <ul>

                {(isAuthenticated) ?
                    <li><NavLink to="/" onClick={() => setTitleOfPage('Tournaments')}>Tournaments</NavLink></li>
                : ''}
                <li><NavLink to="/about" onClick={() => setTitleOfPage('About')}>About</NavLink></li>
                
                {(isAuthenticated) ?
                    <React.Fragment>
                        <li><NavLink to="/support" onClick={() => setTitleOfPage('Support')}>Support</NavLink></li>
                        <li><NavLink to="/faq" onClick={() => setTitleOfPage('FAQ')}>FAQ</NavLink></li>
                        <li><NavLink to="/" onClick={handlerSubmit} className="never-active">Sign Out</NavLink></li>
                    </React.Fragment>
                : ''}
            </ul>
        </div>
    )
}