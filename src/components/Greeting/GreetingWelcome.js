import React from 'react'
import Logo from '../../img/brand.png'

export const GreetingWelcome = () => {
    return (
        <div className="bd-greeting__welcome">
            <p>Добро пожаловать в</p>
            <div className="bd-brandlogo">
                <img src={Logo} alt="Battledraft" />
            </div>
        </div>
    )
}