import React from 'react'
import { useSelector } from 'react-redux'

import { UserBalance } from './../User/UserBalance'
import { UserNotification } from './../User/UserNotification'

export const SectionProfile = () => {
    const content = useSelector(state => state)

    return (
        <div>
            <UserBalance state={content} />
            <UserNotification state={content} />
        </div>
    )
}