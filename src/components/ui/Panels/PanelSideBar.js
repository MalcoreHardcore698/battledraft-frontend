import React from 'react'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

import { ChatLinks } from './../Chat/ChatLinks'

export const PanelSideBar = ({
    state,
    setCurrentModal,
    onChooseChat,
    onNewChat
}) => {
    const handlerSettingsModal = (e) => {
        e.preventDefault()
        setCurrentModal('settings')
    }

    return (
        <section className="bd-sidebar">
            <div className="bd-sidebar-navigation">
                <Link to="/" className="bd-sidebar-navigation__burger">
                    <span></span>
                </Link>
            </div>
        
            <ChatLinks
                chats={state.user.chats}
                onChooseChat={onChooseChat}
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