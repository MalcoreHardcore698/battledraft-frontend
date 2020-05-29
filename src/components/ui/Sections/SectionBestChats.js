import React from 'react'

import { ChatGroup } from './../Chat/ChatGroup'

export const SectionBestChats = ({ state, onOpenChat }) => {
    const chats = state.chats
    const bestChats = chats.filter((chat, i) => (chat.type === 'group' && i < 2))

    return (
        <aside className="bd-sidefeed__groupchats">
            <h2>Group Chats</h2>
            {bestChats.map(chat =>
                <ChatGroup key={chat.id} state={state} chat={chat} chats={chats} onOpenChat={onOpenChat} />
            )}
        </aside>
    )
}