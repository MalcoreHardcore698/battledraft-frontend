import React from 'react'

export const InputField = ({ name, label, type }) => {
    return (
        <div className="bd-inputfield">
            <label htmlFor={name}>{label}</label>
            <input name={name} type={type} autoComplete="off" />
        </div>
    )
}