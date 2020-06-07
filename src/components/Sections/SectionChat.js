import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { ChatMessages } from '../Chat/ChatMessages'
import { ChatMembers } from '../Chat/ChatMembers'

export const SectionChat = ({ onNewMessage }) => {
    const content = useSelector(state => state)
    const [chat, setChat] = useState(null)
    const { chatId } = useParams()

    useEffect(() => {
        const chat = content.chats.find(chat => chat.id === +chatId)
        setChat(chat)
    }, [content.chats, chatId])

    return (
        <div className="bd-chat">
            <ChatMessages chat={chat} onNewMessage={onNewMessage} />
            <ChatMembers chat={chat} />
        </div>
    )
}