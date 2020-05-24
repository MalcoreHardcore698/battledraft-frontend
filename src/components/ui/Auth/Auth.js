import React, { useState } from 'react'

import { AuthSwitcher } from './AuthSwitcher'
import { AuthContent } from './AuthContent'

export const Auth = ({ setAuthenticated, setTitleOfPage }) => {
    const [method, setMethod] = useState('log')

    return (
        <div className="bd-auth bd-center">
            <AuthSwitcher
                method={method}
                setMethod={setMethod}
                setTitleOfPage={setTitleOfPage}
            />
            <AuthContent
                method={method}
                setAuthenticated={setAuthenticated}
                setTitleOfPage={setTitleOfPage}
            />
        </div>
    )
}