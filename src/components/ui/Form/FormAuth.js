import React, { useState } from 'react'

import { CommonBlockTitle } from '../Common/CommonBlockTitle'
import { CommonInputField } from '../Common/CommonInputField'
import { CommonCheckbox } from '../Common/CommonCheckbox'

export const FormAuth = () => {
    const [checked, setCheckbox] = useState(false)

    return (
        <div className="bd-auth__content log">
            <CommonBlockTitle title="Авторизация" />

            <CommonInputField name="login" label="Логин" type="text" />
            <CommonInputField name="auth-password" label="Пароль" type="password" />
            <CommonCheckbox label="Запомнить меня" checked={checked} setCheckbox={setCheckbox} />
        </div>
    )
}