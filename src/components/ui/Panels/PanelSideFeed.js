import React from 'react'

import { UserBalance } from './../User/UserBalance'
import { UserNotification } from './../User/UserNotification'

export const PanelSideFeed = ({ state }) => {
    return (
        <section className="bd-sidefeed">
            <UserBalance state={state} />
            <UserNotification state={state} />
        </section>
    )
}