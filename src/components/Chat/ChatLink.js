import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { closeChat, chooseChat } from './../../utils/actions'

export const ChatLink = ({ chat }) => {
    const dispatch = useDispatch()
    const classes = [
        `bd-chat-${chat.id}`,
        chat.color
    ]

    return (
        <li>
            <NavLink to="/" className="bd-chat__close" onClick={() => dispatch(closeChat(chat.id))}>
                <FontAwesomeIcon icon={faTimes} />
            </NavLink>
            <NavLink to={`/chats/${chat.id}`} activeclass="active" className={classes.join(' ')} onClick={() => dispatch(chooseChat(chat.id))}>
                <img src={chat.icon} alt="Icon Game" />
                <p>{chat.title}</p>
            </NavLink>
        </li>
    )
}