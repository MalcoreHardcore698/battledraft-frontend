import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { openModal } from './../../utils/actions'

export const UserNotification = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className="bd-sidefeed__notifications">
            <div className="bd-title-group">
                <h2><FontAwesomeIcon icon={faBell} />Уведомления</h2>
                <button onClick={() => dispatch(openModal('notifications', null))}>Все</button>
            </div>

            <ul className="bd-sidefeed__notifications-list">
                {(!state.user || !state.user.notifications || state.user.notifications.length === 0) &&
                <div className="bd-commonempty">
                    <p>Уведомления отсутствуют</p>
                </div>}
                {(state.user && state.user.notifications) && state.user.notifications.map(notification =>
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