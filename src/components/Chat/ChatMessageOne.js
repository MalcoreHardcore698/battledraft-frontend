import React from 'react'
import { config } from './../../utils/config'

const api = config.get('api')

export const ChatMessageOne = ({ message, userId }) => {
    return (
        <li className={`message ${(message.sender.id === userId) ? ' my' : ''}`}>
            <img src={`${api}${message.sender.avatar.path.replace('./', '/')}`} alt="Avatar" />
            <p>{message.message}</p>
        </li>
    )
}