import React from 'react'

import { CommonBlockTitle } from '../Common/CommonBlockTitle'
import { CommonInputField } from '../Common/CommonInputField'

export const FormReg = () => {
    return (
        <div className="bd-auth__content reg">
            <CommonBlockTitle title="Регистрация" />
            
            <CommonInputField name="login" label="Логин" type="text" />
            <CommonInputField name="reg-password" label="Пароль" type="password" />
            <CommonInputField name="reg-repeat-password" label="Повторите пароль" type="password" />
            <CommonInputField name="phone" label="Телефон" type="tel" />
            <CommonInputField name="email" label="Электронная почта" type="email" />
        </div>
    )
}