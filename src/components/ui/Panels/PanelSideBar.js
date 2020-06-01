import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserCircle, faCompass, faTrophy, faCog } from '@fortawesome/free-solid-svg-icons'
import { ChatLinks } from './../Chat/ChatLinks'
import { openModal } from './../../../utils/actions'
import Brand from './../../../img/brand.png'

export const PanelSideBar = ({
    onChooseChat,
    onCloseChat,
    onOpenChat
}) => {
    const dispatch = useDispatch()
    const [collapsed, setCollapse] = useState(false)

    return (
        <section className={`bd-sidebar${(collapsed) ? ' collapsed' : ' expand'}`}>
            <div className="bd-sidebar-profile">
                <button
                    className="bd-sidebar-profile__toggle"
                    onClick={() => setCollapse(!collapsed)}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <Link to="/" onClick={() => setCollapse(false)}>
                    <img src={Brand} alt="Battledraft" />
                </Link>

                <button
                    className="bd-sidebar-profile__settings"
                    onClick={() => dispatch(openModal('settings', null))}
                >
                    <FontAwesomeIcon icon={faCog} />
                </button>
            </div>

            <div className="bd-sidebar-navigation">
                <Link to="/profile" onClick={() => setCollapse(false)} className="bd-sidebar-navigation__profile">
                    <FontAwesomeIcon icon={faUserCircle} />
                    <p>Профиль</p>
                </Link>
                <Link to="/navigator" onClick={() => setCollapse(false)}>
                    <FontAwesomeIcon icon={faCompass} />
                    <p>Навигатор</p>
                </Link>
                <Link to="/tournaments" onClick={() => setCollapse(false)}>
                    <FontAwesomeIcon icon={faTrophy} />
                    <p>Турниры</p>
                </Link>
            </div>

            <div className="bd-sidebar-chats">
                <h2>Чаты</h2>
                <ChatLinks
                    onChooseChat={onChooseChat}
                    onCloseChat={onCloseChat}
                    onOpenChat={onOpenChat}
                />
            </div>
        </section>
    )
}