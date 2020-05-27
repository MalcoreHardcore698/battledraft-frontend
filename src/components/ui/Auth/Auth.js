import React, { useState } from 'react'

import { Switcher } from './Switcher'
import { Content } from './Content'

export const Auth = ({ setAuthenticated }) => {
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