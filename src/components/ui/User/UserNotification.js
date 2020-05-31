import React from 'react'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

export const UserNotification = ({ state }) => {
    return (
        <div className="bd-sidefeed__notifications">
            <div className="bd-title-group">
                <h2><FontAwesomeIcon icon={faBell} />Уведомления</h2>
                <Link to="/notifications">Все</Link>
            </div>

            <ul className="bd-sidefeed__notifications-list">
                {state.user.notifications.map(notification =>
                    <li key={notification.id} className="bd-sidefeed__notifications-item">
                        <div className="icon">
                            <img src={notification.icon} alt={notification.title} />
                        </div>

                        <div className="content">
                            <p className="title">{notification.title}</p>
                            <p className="desc">{notification.description}</p>
                            <p className="date">{notification.date}</p>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}