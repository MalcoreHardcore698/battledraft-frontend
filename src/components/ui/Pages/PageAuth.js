import React, { useState } from 'react'

import { AuthSwitcher } from './../Auth/AuthSwitcher'
import { AuthContent } from './../Auth/AuthContent'

export const PageAuth = ({ setAuthenticated, onAuthUser, onRegUser }) => {
    const [method, setMethod] = useState('log')

    return (
        <div className="bd-auth bd-center">
            <AuthSwitcher
                method={method}
                setMethod={setMethod}
            />
            <AuthContent
                method={method}
                setAuthenticated={setAuthenticated}
                onAuthUser={onAuthUser}
                onRegUser={onRegUser}
            />
        </div>
    )
}