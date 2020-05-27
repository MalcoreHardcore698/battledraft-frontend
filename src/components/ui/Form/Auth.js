import React, { useState } from 'react'

import { BlockTitle } from './../Common/BlockTitle'
import { InputField } from './../Common/InputField'
import { Checkbox } from './../Common/Checkbox'
import { Button } from './../Common/Button'

export const Auth = ({ method, handler }) => {
    const [checked, setCheckbox] = useState(false)

    return (
        <form className="bd-auth__authentication">
            <BlockTitle title="Authentication" />

            <InputField name="login" label="Login" type="text" />
            <InputField name="auth-password" label="Password" type="password" />
            <Checkbox label="Remember Me" checked={checked} setCheckbox={setCheckbox} />

            <Button
                text={(method === 'log') ? 'Sign In' : 'Sign Up'}
                type="accept"
                handler={handler}
            />
        </form>
    )
}