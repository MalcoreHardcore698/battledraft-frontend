import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { CommonButton } from './CommonButton'

export const CommonMutationButton = ({ options }) => {
    const {
        text,
        mutation,
        variables,
        classes=[],
        handler
    } = options

    const [action] = useMutation(mutation)

    return (
        <CommonButton
            text={text}
            type={classes.join(' ')}
            handler={async () => {
                const res = await action({ variables })
                handler(res)
            }}
        />
    )
}