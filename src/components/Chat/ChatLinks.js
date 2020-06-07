import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useDispatch } from 'react-redux'
import { ChatLink } from './ChatLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { openModal } from './../../utils/actions'
import { GET_ALL_USER_CHATS } from './../../utils/queries'

export const ChatLinks = () => {
    const { data } = useQuery(GET_ALL_USER_CHATS)
    const dispatch = useDispatch()

    return (
        <div className="bd-openchats">
            {(data &&  data.allUserChats && data.allUserChats.find(chat => chat.type === 'personal')) ?
                <React.Fragment>
                    <ul className={`bd-openchats__personal`}>
                        {data.allUserChats.filter(chat => chat.type === 'personal').map(currentChat =>
                            <ChatLink
                                key={currentChat.id}
                                chat={currentChat}
                            />
                        )}
                        <li className="bd-chat-new" onClick={() => dispatch(openModal('new-personal-chat', null))}><FontAwesomeIcon icon={faPlus} /></li>
                    </ul>

                    <div className="bd-break"></div>
                </React.Fragment>
            : ''}

            <ul className={`bd-openchats__group`}>
                {data && data.allUserChats && data.allUserChats.filter(chat => chat.type === 'group').map(currentChat =>
                    <ChatLink
                        key={currentChat.id}
                        chat={currentChat}
                    />
                )}
                <li className="bd-chat-new" onClick={() => dispatch(openModal('new-group-chat', null))}><FontAwesomeIcon icon={faPlus} /></li>
            </ul>
        </div>
    )
}