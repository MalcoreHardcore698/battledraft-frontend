import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Skeleton from 'react-skeleton-loader'
import { CommonFetchFailure } from './../Common/CommonFetchFailure'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { GET_ALL_USER_NOTIFICATIONS } from './../../../utils/queries'

export const UserNotification = () => {
    const { loading, error, data } = useQuery(GET_ALL_USER_NOTIFICATIONS)

    if (loading) return <Skeleton widthRandomness={0} width="100%" height="256px" />
    if (error) return <CommonFetchFailure />

    return (
        <div className="bd-sidefeed__notifications">
            <div className="bd-title-group">
                <h2><FontAwesomeIcon icon={faBell} />Уведомления</h2>
                <Link to="/notifications">Все</Link>
            </div>

            <ul className="bd-sidefeed__notifications-list">
                {data.allUserNotifications.map(notification =>
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