import React from 'react'

import { ChatGroup } from './../Chat/ChatGroup'

export const SectionBestChats = () => {
    return (
        <aside className="bd-sidefeed__groupchats">
            <h2>Group Chats</h2>
            <ChatGroup />
            <ChatGroup />
        </aside>
    )
}