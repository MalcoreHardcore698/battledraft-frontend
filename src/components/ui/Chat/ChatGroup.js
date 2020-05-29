import React from 'react'
import { Link } from 'react-router-dom'

export const ChatGroup = ({ state, chat, chats, onOpenChat }) => {
    if (!chat) return null

    const handlerChat = () => {
        if (!state.user.chats.find(_chat => _chat.id === chat.id)) {
            onOpenChat(chat.id, chats)
        }
    }

    return (
        <Link to={`/chats/${chat.id}`} className="block" onClick={handlerChat}>
            <div className="title">
                <img src={chat.icon} alt="Icon Game" />
                <ul>
                    <li><img src="https://vignette.wikia.nocookie.net/gwent/images/7/75/CirALt.png/revision/latest?cb=20170830181650" alt="Player 1" /></li>
                    <li><img src="https://vignette.wikia.nocookie.net/gwent/images/7/75/CirALt.png/revision/latest?cb=20170830181650" alt="Player 2" /></li>
                    <li>{chat.members}</li>
                </ul>
            </div>
            <div className="description">
                <h3>{chat.title}</h3>
                <p>Strategic Battle Royal</p>
            </div>
        </Link>
    )
}