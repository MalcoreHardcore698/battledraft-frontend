import React, { useState } from 'react'
import { ChatMessages } from '../Chat/ChatMessages'
import { ChatMembers } from '../Chat/ChatMembers'

export const SectionChat = ({ onNewMessage }) => {
    // eslint-disable-next-line
    const [chat, setChat] = useState(null)

    return (
        <div className="bd-chat">
            <ChatMessages chat={chat} onNewMessage={onNewMessage} />
            <ChatMembers chat={chat} />
        </div>
    )
}