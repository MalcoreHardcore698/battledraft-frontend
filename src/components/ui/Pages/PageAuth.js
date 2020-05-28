import React, { useState } from 'react'

import { Switcher } from '../Auth/AuthSwitcher'
import { Content } from '../Auth/AuthContent'

export const PageAuth = ({ setAuthenticated }) => {
    const [method, setMethod] = useState('log')

    return (
        <div className="bd-auth bd-center">
            <Switcher
                method={method}
                setMethod={setMethod}
            />
            <Content
                method={method}
                setAuthenticated={setAuthenticated}
            />
        </div>
    )
}