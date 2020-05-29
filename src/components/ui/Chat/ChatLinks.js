import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { ChatLink } from './ChatLink'

export const ChatLinks = ({ chats, onChooseChat, onCloseChat, onOpenChat }) => {
    return (
        <div className="bd-openchats">
            <ul className={`bd-openchats__personal`}>
                {chats.filter(chat => chat.type === 'personal').map(chat =>
                    <ChatLink
                        key={chat.id}
                        chat={chat}
                        onChooseChat={onChooseChat}
                        onCloseChat={onCloseChat}
                    />
                )}
                <li className="bd-chat-new" onClick={onOpenChat}><FontAwesomeIcon icon={faPlus} /></li>
            </ul>

            <div className="bd-break"></div>

            <ul className={`bd-openchats__group`}>
                {chats.filter(chat => chat.type === 'group').map(chat =>
                    <ChatLink
                        key={chat.id}
                        chat={chat}
                        onChooseChat={onChooseChat}
                        onCloseChat={onCloseChat}
                    />
                )}
                <li className="bd-chat-new" onClick={onOpenChat}><FontAwesomeIcon icon={faPlus} /></li>
            </ul>
        </div>
    )
}