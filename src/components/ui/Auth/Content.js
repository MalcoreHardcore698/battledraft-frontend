import React from 'react'

import { Auth } from './../Form/Auth'
import { Reg } from './../Form/Reg'

export const Content = ({ method, setAuthenticated }) => {
    const handlerSubmit = () => {
        setAuthenticated(true)
    }

    return (
        <div className={`bd-auth__content bd-block-default${(method === 'log') ? '' : ' switch'}`}>
            {(method === 'log') ?
                <Auth
                    method={method}
                    handler={handlerSubmit}
                />
            : ''}

            {(method === 'reg') ?
                <Reg
                    method={method}
                    handler={handlerSubmit}
                />
            : ''}
        </div>
    )
}