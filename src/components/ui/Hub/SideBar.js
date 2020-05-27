import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const OpenChat = ({ chat, activeChat, setActiveChat }) => {
    return (
        <li className={`bd-chat-${chat.id} ${chat.color}${(activeChat && activeChat.id === chat.id) ? ' active' : ''}`} onClick={() => setActiveChat(chat)}>
            <img src={chat.img} alt="Icon Game" />
        </li>
    )
}

export const OpenChats = ({ type, chats, activeChat, setActiveChat, onNewChat }) => {
    return (
        <ul className={`bd-openchats ${type}`}>
            {chats.map(chat => <OpenChat key={chat.id} chat={chat} activeChat={activeChat} setActiveChat={setActiveChat} />)}
            <li className="bd-chat-new" onClick={onNewChat}><FontAwesomeIcon icon={faPlus} /></li>
        </ul>
    )
}

export const SideBar = ({ state, chats, setActiveChat, onNewChat }) => {
    return (
        <section className="bd-sidebar">
            <div className="bd-sidebar-navigation">
                <button className="bd-burger-toggle" onClick={() => setActiveChat(null)}><span></span></button>
            </div>

            {(chats.personal.length > 0 && <OpenChats
                type="personal"
                chats={chats.personal}
                activeChat={state.user.activeChat}
                setActiveChat={setActiveChat}
                onNewChat={onNewChat}
            />)}

            {(chats.personal.length > 0 && chats.group.length > 0 && <div className="bd-break"></div>)}

            {(chats.group.length > 0 && <OpenChats
                type="group"
                chats={chats.group}
                activeChat={state.user.activeChat}
                setActiveChat={setActiveChat}
                onNewChat={onNewChat}
            />)}
        </section>
    )
}