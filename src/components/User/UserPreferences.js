import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { config } from './../../utils/config'

const api = config.get('api')

export const UserPreferences = () => {
    const state = useSelector(state => state)
    return (
        <div className="bd-user-preferences">
            <div className="bd-title-group">
                <h2><FontAwesomeIcon icon={faTrophy} />Предпочтительные сообщества</h2>
            </div>

            <div className="bd-navigator__hublist">
                {state.user.preferences.map((hub, i) =>
                    <div key={i} className="bd-hubblock">
                        <div className="content">
                            <img src={`${api}${hub.icon.replace('./', '/')}`} alt={hub.icon} />
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