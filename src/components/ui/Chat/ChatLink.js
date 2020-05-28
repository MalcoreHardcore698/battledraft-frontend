import React from 'react'
import { NavLink } from 'react-router-dom'

export const ChatLink = ({ chat, onChooseChat }) => {
    const classes = [
        `bd-chat-${chat.id}`,
        chat.color
    ]
    return (
        <li>
            <NavLink to={`/chats/${chat.id}`} activeClass="active" className={classes.join(' ')} onClick={() => onChooseChat(chat)}>
                <img src={chat.img} alt="Icon Game" />
            </NavLink>
        </li>
    )
}