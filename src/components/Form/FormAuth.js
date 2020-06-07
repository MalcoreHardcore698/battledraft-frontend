import React, { useState } from 'react'
import { CommonBlockTitle } from '../Common/CommonBlockTitle'
import { CommonInputField } from '../Common/CommonInputField'
import { CommonCheckbox } from '../Common/CommonCheckbox'

export const FormAuth = ({
    invalidLogin,
    invalidPassword,
    setInvalidLogin,
    setInvalidPassword
}) => {
    const [checked, setCheckbox] = useState(false)
    
    return (
        <div className="bd-auth__content log">
            <CommonBlockTitle title="Авторизация" />

            <CommonInputField
                name="login"
                label="Логин"
                type="text"
                className={(invalidLogin) ? 'invalid' : ''}
                onChange={() => setInvalidLogin(false)}
            />
            <CommonInputField
                name="password"
                label="Пароль"
                type="password"
                className={(invalidPassword) ? 'invalid' : ''}
                onChange={() => setInvalidPassword(false)}
            />
            <CommonCheckbox label="Запомнить меня" checked={checked} setCheckbox={setCheckbox} />
        </div>
    )
}