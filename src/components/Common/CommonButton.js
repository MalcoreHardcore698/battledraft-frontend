import React from 'react'

export const CommonButton = ({ text, type, disabled, handler=()=>{} }) => {
    return (
        <button
            className={`bd-button-default${type ? ' ' + type : ''}`}
            disabled={disabled}
            onClick={(e) => {
                e.preventDefault()
                handler()
            }}
        >
            {text}
        </button>
    )
}