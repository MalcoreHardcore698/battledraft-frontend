import React from 'react'

export const CommonTextareaField = ({ name, label, value, disabled }) => {
    return (
        <div className="bd-inputfield">
            <label htmlFor={name}>{label}</label>
            <textarea
                name={name}
                placeholder="Не указано"
                defaultValue={value}
                disabled={disabled}
            />
        </div>
    )
}