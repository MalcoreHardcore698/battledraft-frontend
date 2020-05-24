import React from 'react'

export const AuthSwitcher = ({ method, setMethod, setTitleOfPage }) => {
    const handlerSwitcher = (e) => {
        e.preventDefault()
        setMethod(method === 'log' ? 'reg' : 'log')
        setTitleOfPage(method === 'log' ? 'Registration' : 'Authentication')
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