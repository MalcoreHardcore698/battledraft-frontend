import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ChatMessages } from '../Chat/ChatMessages'
import { ChatMembers } from '../Chat/ChatMembers'

export const SectionChat = ({ state, onNewMessage }) => {
    const [chat, setChat] = useState(null)
    const { chatId } = useParams()

    useEffect(() => {
        const chat = state.chats.find(chat => chat.id === +chatId)
        setChat(chat)
    }, [state.chats, chatId])

    return (
        <div className="bd-chat">
            <ChatMessages state={state} chat={chat} onNewMessage={onNewMessage} />
            <ChatMembers state={state} chat={chat} />
        </div>
    )
}