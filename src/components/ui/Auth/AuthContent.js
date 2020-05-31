import React from 'react'

import { FormAuth } from './../Form/FormAuth'
import { FormReg } from './../Form/FormReg'
import { CommonButton } from '../Common/CommonButton'

export const AuthContent = ({ method, setAuthenticated, onAuthUser, onRegUser }) => {
    const handlerSubmit = (e) => {
        e.preventDefault()
        if (method === 'log') {
            onAuthUser(null, null)
            setAuthenticated(true)
            localStorage.setItem('isAuthenticated', true)
        }
        else {
            onRegUser(null, null, null, null)
            setAuthenticated(true)
            localStorage.setItem('isAuthenticated', true)
        }
    }

    return (
        <form className={`bd-auth__form ${(method === 'log') ? '' : ' switch'}`}>
            {(method === 'log') ? <FormAuth method={method} /> : ''}
            {(method === 'reg') ? <FormReg method={method} /> : ''}

            <CommonButton
                text={(method === 'log') ? 'Войти' : 'Зарегистрироваться'}
                type="accept"
                handler={handlerSubmit}
            />
        </form>
    )
}