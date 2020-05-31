import React from 'react'

import { UserBalance } from './../User/UserBalance'
import { UserNotification } from './../User/UserNotification'

export const SectionProfile = ({ state }) => {
    return (
        <div>
            <UserBalance state={state} />
            <UserNotification state={state} />
        </div>
    )
}