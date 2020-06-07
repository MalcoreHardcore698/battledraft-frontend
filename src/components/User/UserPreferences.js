import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

export const UserPreferences = () => {
    const state = useSelector(state => state)
    return (
        <div className="bd-user-preferences">
            <div className="bd-title-group">
                <h2><FontAwesomeIcon icon={faTrophy} />Предпочтительные сообщества</h2>
            </div>

            <div className="bd-navigator__hublist">
                {state.user.preferences.map(hub =>
                    <div key={hub.id} className="bd-hubblock">
                        <div className="content">
                            <img src={`/img/${hub.icon}`} alt={hub.icon} />
                            <div className="info">
                                <p className="title">{hub.title}</p>
                                <p className="slogan">{hub.slogan}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}