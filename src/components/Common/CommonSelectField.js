import React from 'react'

export const CommonSelectField = ({ name, label, value, options, selectRef }) => {
    if (options && options.length === 0) return (
        <div className="bd-selectfield">
            <label>{label}</label>
            <p>Отсутсвутют данные</p>
        </div>
    )

    return (
        <div className="bd-selectfield">
            <label htmlFor={name}>{label}</label>
            <select name={name} defaultValue={value ? value : ''} ref={selectRef}>
                {options.map((option, i) =>
                    <option key={i} value={option.id || option}>
                        {option.name || option.title || option}
                    </option>
                )}
            </select>
        </div>
    )
}