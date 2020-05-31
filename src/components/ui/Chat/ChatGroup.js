import React from 'react'
import { Link } from 'react-router-dom'

import { ChatOffers } from './ChatOffers'

export const ChatGroup = ({ state, chat, chats, offers, onOpenChat }) => {
    if (!chat) return null

    const handlerChat = () => {
        if (!state.user.chats.find(_chat => _chat.id === chat.id)) {
            onOpenChat(chat.id, chats)
        }
    }

    return (
        <div className="block">
            <Link to={`/chats/${chat.id}`}  onClick={handlerChat}>
                <div className="title">
                    <img src={chat.icon} alt="Icon Game" />
                    <ul>
                        {(chat.members) ? chat.members.map(member =>
                            <li><img src={member.avatar} alt={`${member.name}`} /></li>
                        ) : ''}
                        <li className="bd-clearfix">{chat.members.length}</li>
                    </ul>
                </div>
                <div className="description">
                    <h3>{chat.title}</h3>
                    <p>Strategic Battle Royal</p>
                </div>
            </Link>

            <ChatOffers offers={offers} />
        </div>
    )
}