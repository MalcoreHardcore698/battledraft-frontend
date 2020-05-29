import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { ChatLink } from './ChatLink'

export const ChatLinks = ({ state, setCurrentModal, onChooseChat, onCloseChat, onOpenChat }) => {
    return (
        <div className="bd-openchats">
            {(state.user.chats.find(chat => chat.type === 'personal')) ?
                <React.Fragment>
                    <ul className={`bd-openchats__personal`}>
                        {state.user.chats.filter(chat => chat.type === 'personal').map(currentChat =>
                            <ChatLink
                                key={currentChat.id}
                                chat={state.chats.find(chat => chat.id === currentChat)}
                                onChooseChat={onChooseChat}
                                onCloseChat={onCloseChat}
                            />
                        )}
                        <li className="bd-chat-new" onClick={onOpenChat}><FontAwesomeIcon icon={faPlus} /></li>
                    </ul>

                    <div className="bd-break"></div>
                </React.Fragment>
            : ''}

            <ul className={`bd-openchats__group`}>
                {state.user.chats.filter(chat => chat.type === 'group').map(currentChat =>
                    <ChatLink
                        key={currentChat.id}
                        chat={state.chats.find(chat => chat.id === currentChat.id)}
                        onChooseChat={onChooseChat}
                        onCloseChat={onCloseChat}
                    />
                )}
                <li className="bd-chat-new" onClick={() => setCurrentModal('groupchats')}><FontAwesomeIcon icon={faPlus} /></li>
            </ul>
        </div>
    )
}