import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { CommonInput } from './CommonInput'

export const CommonMutationInput = ({ options }) => {
    const {
        type,
        refLink,
        mutation,
        variables={},
        placeholder,
        defaultValue,
        keyCode=13,
        handlerChange=()=>{},
        handlerEnterPress=()=>{},
        tabIndex,
        autoFocus,
    } = options

    const [action] = useMutation(mutation)

    const handlerKeyDown = (e, keyCode) => {
        if (e.keyCode === keyCode) {
            handlerEnterPress()
            action({
                variables
            })
        }
    }

    return (
        <CommonInput
            type={type}
            refLink={refLink}
            defaultValue={defaultValue}
            placeholder={placeholder}
            handlerChange={handlerChange}
            handlerKeyDown={(e) => handlerKeyDown(e, keyCode)}
            tabIndex={tabIndex}
            autoFocus={autoFocus}
        />
    )
}