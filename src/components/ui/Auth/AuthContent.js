import React from 'react'

import { AuthenticationForm } from './../AuthenticationForm'
import { RegistrationForm } from './../RegistrationForm'

export const AuthContent = ({ method, setAuthenticated, setTitleOfPage }) => {
    const handlerSubmit = () => {
        setTitleOfPage('Tournaments')
        setAuthenticated(true)
    }

    return (
        <div className={`bd-auth__content bd-block-default${(method === 'log') ? '' : ' switch'}`}>
            {(method === 'log') ?
                <AuthenticationForm
                    method={method}
                    handler={handlerSubmit}
                />
            : ''}

            {(method === 'reg') ?
                <RegistrationForm
                    method={method}
                    handler={handlerSubmit}
                />
            : ''}
        </div>
    )
}