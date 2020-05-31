import React from 'react'

export const CommonButton = ({ text, type, handler }) => {
    return (
        <button
            className={`bd-button-default${type ? ' ' + type : ''}`}
            onClick={handler}
        >
            {text}
        </button>
    )
}