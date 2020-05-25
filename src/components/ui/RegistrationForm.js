import React from 'react'

import { BlockTitle } from './BlockTitle'
import { InputField } from './InputField'
import { Button } from './Button'

export const RegistrationForm = ({ method, handler }) => {
    return (
        <form className="bd-auth__registration">
            <BlockTitle title="Registration" />
            
            <InputField name="login" label="Login" type="text" />
            <InputField name="reg-password" label="Password" type="password" />
            <InputField name="reg-repeat-password" label="Repeat password" type="password" />
            <InputField name="phone" label="Phone" type="tel" />
            <InputField name="email" label="Email" type="email" />

            <Button
                text={(method === 'log') ? 'Sign In' : 'Sign Up'}
                type="accept"
                handler={handler}
            />
        </form>
    )
}