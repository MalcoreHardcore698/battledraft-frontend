import React from 'react'

export const Button = ({ text, type, handler }) => {
    return (
        <button
            className={`bd-button-default${type ? ' ' + type : ''}`}
            onClick={handler}
        >
            {text}
        </button>
    )
}