import React from 'react'

import { FormAuth } from './../Form/FormAuth'
import { FormReg } from './../Form/FormReg'

export const AuthContent = ({ method, setAuthenticated }) => {
    const handlerSubmit = () => {
        setAuthenticated(true)
    }

    return (
        <div className={`bd-auth__content bd-block-default${(method === 'log') ? '' : ' switch'}`}>
            {(method === 'log') ?
                <FormAuth
                    method={method}
                    handler={handlerSubmit}
                />
            : ''}

            {(method === 'reg') ?
                <FormReg
                    method={method}
                    handler={handlerSubmit}
                />
            : ''}
        </div>
    )
}