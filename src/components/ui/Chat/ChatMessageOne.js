import React from 'react'

export const ChatMessageOne = ({ message, userId }) => {
    return (
        <li className={`message ${(message.userId === userId) ? ' my' : ''}`}>
            <img src={message.avatar} alt="Avatar" />
            <p>{message.content}</p>
        </li>
    )
}