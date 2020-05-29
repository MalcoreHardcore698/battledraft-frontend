import React from 'react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export const ChatLink = ({ chat, onChooseChat, onCloseChat }) => {
    const classes = [
        `bd-chat-${chat.id}`,
        chat.color
    ]
    return (
        <li>
            <button className="bd-chat__close" onClick={() => onCloseChat(chat.id)}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <NavLink to={`/chats/${chat.id}`} activeclass="active" className={classes.join(' ')} onClick={() => onChooseChat(chat)}>
                <img src={chat.img} alt="Icon Game" />
            </NavLink>
        </li>
    )
}