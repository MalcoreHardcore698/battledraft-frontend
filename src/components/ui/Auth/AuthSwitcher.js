import React from 'react'

export const AuthSwitcher = ({ method, setMethod }) => {
    const handlerSwitcher = (e) => {
        e.preventDefault()
        setMethod(method === 'log' ? 'reg' : 'log')
    }

    return (
        <div className="bd-auth__switcher bd-block-default">
            <p>Switch</p>
            <button onClick={handlerSwitcher}>
                <span className={(method === 'log' ? 'not-switch' : 'switch')}></span>
            </button>
        </div>
    )
}