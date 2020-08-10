import React, { useEffect } from 'react'
import { useSubscription } from '@apollo/react-hooks'
import { useSelector, useDispatch } from 'react-redux'
import { ChatLink } from './ChatLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { openModal, addChat } from './../../utils/actions'
import { USER_CHAT_SUBSCRIPTION } from './../../utils/queries'
import Skeleton from 'react-skeleton-loader'

export const ChatLinks = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const { data, loading } = useSubscription(USER_CHAT_SUBSCRIPTION, {
        variables: { user: state.user.id }
    })

    useEffect(() => {
        if (data && data.userchats) {
            console.log('UPDATED')
            data.userchats.forEach(userchat =>
                dispatch(addChat(userchat.chatId))    
            )
        }
    }, [])

    return (
        <div className="bd-openchats">
            <ul className={`bd-openchats__group`}>
                {((data && data.userchats) || state.user.chats).map(chat =>
                    <ChatLink
                        key={chat.chatId}
                        chat={chat.chatId}
                    />
                )}

                {(loading && !data && data?.userchats) && <li>
                    <Skeleton widthRandomness={0} width="100%" height="45px" />
                </li>}

                <li
                    className="bd-chat-new"
                    onClick={() => dispatch(openModal('new-group-chat', null))}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </li>
            </ul>
        </div>
    )
}