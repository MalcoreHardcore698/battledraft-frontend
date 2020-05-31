import React from 'react'

import { ChatGroup } from '../Chat/ChatGroup'

export const SectionPopularHub = ({ state, onOpenChat }) => {
    const chat = state.chats[0]

    return (
        <aside className="bd-sidefeed__popular">
            <h2>Популярное сообщество</h2>
            <ChatGroup
                state={state}
                chat={chat}
                chats={state.chats}
                offers={state.games.find(game => game.id === chat.id).offers}
                onOpenChat={onOpenChat}
            />
        </aside>
    )
}