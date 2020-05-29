import React from 'react'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faCompass } from '@fortawesome/free-solid-svg-icons'

import { ChatLinks } from './../Chat/ChatLinks'

export const PanelSideBar = ({
    state,
    setCurrentModal,
    onChooseChat,
    onCloseChat,
    onOpenChat
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

            <div className="bd-sidebar-navigator">
                <Link to="/navigator" className="bd-sidebar-navigator__button">
                    <FontAwesomeIcon icon={faCompass} />
                </Link>
            </div>
        
            <ChatLinks
                state={state}
                setCurrentModal={setCurrentModal}
                onChooseChat={onChooseChat}
                onCloseChat={onCloseChat}
                onOpenChat={onOpenChat}
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