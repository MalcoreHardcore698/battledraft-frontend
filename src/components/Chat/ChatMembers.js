import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { config } from './../../utils/config'

const api = config.get('api')

export const ChatMembers = ({ chat }) => {
    return (
        <div className="bd-members">
            <h2><FontAwesomeIcon icon={faUsers} />Участники {(chat && chat.members && chat.members.length > 0) ? chat.members.length : ''}</h2>

            <ul className="bd-members__list">
                {(chat && chat.members && chat.members.length === 0) ?
                    <p>Пусто</p>
                : ''}

                {(chat && chat.members && chat.members.length > 0) ? chat.members.map((member, index) =>
                    <li
                        key={index}
                        className="bd-members__list-item"
                    >
                        <img src={`${api}${member.avatar.path.replace('./', '/')}`} alt={member.name} />
                        <p>{member.name}</p>
                    </li>
                ) : ''}
            </ul>
        </div>
    )
}