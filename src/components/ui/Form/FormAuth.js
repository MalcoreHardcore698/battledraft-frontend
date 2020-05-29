import React, { useState } from 'react'

import { BlockTitle } from '../Common/CommonBlockTitle'
import { InputField } from '../Common/CommonInputField'
import { Checkbox } from '../Common/CommonCheckbox'
import { Button } from '../Common/CommonButton'

export const FormAuth = ({ method, handler }) => {
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