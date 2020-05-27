import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCog } from '@fortawesome/free-solid-svg-icons'

export const OpenChat = ({ chat, activeChat, onChooseChat }) => {
    const classes = [
        `bd-chat-${chat.id}`,
        chat.color,
        (activeChat && activeChat.id === chat.id) ? ' active' : ''
    ]
    return (
        <li
            className={classes.join(' ')}
            onClick={(e) => onChooseChat(e, chat)}
        >
            <img src={chat.img} alt="Icon Game" />
        </li>
    )
}

export const OpenChats = ({ chats, activeChat, onChooseChat, onNewChat }) => {
    return (
        <div className="bd-openchats">
            <ul className={`bd-openchats__personal`}>
                {chats.filter(chat => chat.type === 'personal').map(chat =>
                    <OpenChat
                        key={chat.id}
                        chat={chat}
                        activeChat={activeChat}
                        onChooseChat={onChooseChat}
                    />
                )}
                <li className="bd-chat-new" onClick={onNewChat}><FontAwesomeIcon icon={faPlus} /></li>
            </ul>

            <div className="bd-break"></div>

            <ul className={`bd-openchats__group`}>
                {chats.filter(chat => chat.type === 'group').map(chat =>
                    <OpenChat
                        key={chat.id}
                        chat={chat}
                        activeChat={activeChat}
                        onChooseChat={onChooseChat}
                    />
                )}
                <li className="bd-chat-new" onClick={onNewChat}><FontAwesomeIcon icon={faPlus} /></li>
            </ul>
        </div>
    )
}

export const SideBar = ({
    state,
    setCurrentModal,
    setCurrentGame,
    setCurrentArticle,
    onChooseChat,
    onNewChat
}) => {
    const handlerChooseChat = (e, chat) => {
        e.preventDefault()
        setCurrentArticle(null)
        setCurrentGame(null)
        onChooseChat(chat)
    }

    const handlerSettingsModal = (e) => {
        e.preventDefault()
        setCurrentModal('settings')
    }

    return (
        <section className="bd-sidebar">
            <div className="bd-sidebar-navigation">
                <button
                    className="bd-sidebar-navigation__burger"
                    onClick={(e) => handlerChooseChat(e, null)}
                >
                    <span></span>
                </button>
            </div>

            <OpenChats
                chats={state.user.chats}
                activeChat={state.user.activeChat}
                onChooseChat={handlerChooseChat}
                onNewChat={onNewChat}
            />

            <div className="bd-sidebar-navigation">
                <button
                    className="bd-sidebar-navigation__settings"
                    onClick={handlerSettingsModal}
                >
                    <FontAwesomeIcon icon={faCog} />
                </button>
            </div>
        </section>
    )
}