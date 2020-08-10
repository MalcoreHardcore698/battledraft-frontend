import React from 'react'

export const CommonInput = ({
    type,
    refLink,
    defaultValue,
    placeholder,
    handlerChange,
    handlerKeyDown,
    tabIndex,
    autoFocus
}) => {
    return (
        <input
            ref={refLink}
            defaultValue={defaultValue}
            className={`bd-input-default${type ? ' ' + type : ''}`}
            placeholder={placeholder}
            onChange={(e) => handlerChange(e)}
            onKeyDown={(e) => handlerKeyDown(e)}
            tabIndex={tabIndex}
            autoFocus={autoFocus}
        />
    )
}