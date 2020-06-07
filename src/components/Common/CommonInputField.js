import React from 'react'

export const CommonInputField = ({ name, label, type, className, onChange }) => {
    return (
        <div className="bd-inputfield">
            <label htmlFor={name}>{label}</label>
            <input className={className} name={name} type={type} onChange={onChange} autoComplete="off" />
        </div>
    )
}