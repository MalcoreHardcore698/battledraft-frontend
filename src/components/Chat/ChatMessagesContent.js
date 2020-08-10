import React, { useEffect, useRef } from 'react'
import { ChatMessageOne } from './ChatMessageOne'

export const ChatMessagesContent = ({ messages, userId }) => {
    const historyRef = useRef(null)

    useEffect(() => {
        const historyEl = historyRef.current
        if (historyEl) {
            historyEl.scrollTop = historyEl.scrollHeight
        }
    }, [messages])

    return (
        <ul ref={historyRef} className="history">
            {messages.map((message, i) =>
                <ChatMessageOne key={i} message={message} userId={userId} />
            )}
        </ul>
    )
}