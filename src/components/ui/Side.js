import React from 'react'

import { UserPanel } from './User/UserPanel'
import { UserMessagesPanel } from './User/UserMessagesPanel'
import { UserLadderPanel } from './User/UserLadderPanel'

export const Side = () => {
    return (
        <div className="bd-areaside">
            <UserPanel />
            <UserMessagesPanel />
            <UserLadderPanel />
        </div>
    )
}