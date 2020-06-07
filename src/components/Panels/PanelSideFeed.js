import React from 'react'

import { UserBalance } from './../User/UserBalance'
import { UserNotification } from './../User/UserNotification'

export const PanelSideFeed = () => {
    return (
        <section className="bd-sidefeed">
            <UserBalance />
            <UserNotification />
        </section>
    )
}