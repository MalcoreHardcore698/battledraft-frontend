import React from 'react'

import { ChatMessages } from '../Chat/ChatMessages'

export const SectionChat = ({ state, onNewMessage }) => {
    return (
        <div className="bd-messages">
            <ChatMessages state={state} onNewMessage={onNewMessage} />
        </div>
    )
}