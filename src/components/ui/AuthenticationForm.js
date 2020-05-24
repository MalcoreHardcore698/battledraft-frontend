import React, { useState } from 'react'

import { BlockTitle } from './BlockTitle'
import { InputField } from './InputField'
import { Checkbox } from './Checkbox'
import { Button } from './Button'

export const AuthenticationForm = ({ method, handler }) => {
    const [checked, setCheckbox] = useState(false)

    return (
        <div className="bd-auth__authentication">
            <BlockTitle title="Authentication" />

            <InputField name="login" label="Login" type="text" />
            <InputField name="password" label="Password" type="password" />
            <Checkbox label="Remember Me" checked={checked} setCheckbox={setCheckbox} />

            <Button
                text={(method === 'log') ? 'Sign In' : 'Sign Up'}
                type="accept"
                handler={handler}
            />
        </div>
    )
}