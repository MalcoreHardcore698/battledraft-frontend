import React from 'react'

export const CommonInputField = ({ name, label, type }) => {
    return (
        <div className="bd-inputfield">
            <label htmlFor={name}>{label}</label>
            <input name={name} type={type} autoComplete="off" />
        </div>
    )
}