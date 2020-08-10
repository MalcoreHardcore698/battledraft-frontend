import React from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CommonMutationButton } from '../Common/CommonMutationButton'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { GET_CHAT, CLOSE_USER_CHAT } from './../../utils/queries'
import { config } from './../../utils/config'
import { closeChat } from './../../utils/actions'
import Skeleton from 'react-skeleton-loader'

const api = config.get('api')

export const ChatLink = ({ chat }) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    let history = useHistory()

    const { loading, data } = useQuery(GET_CHAT, {
        variables: {
            id: chat
        }
    })

    const classes = [
        `bd-chat-${chat}`,
        chat.color
    ]

    const getReceiver = () => {
        const receiver = data.getChat.participants.find(p => p.id !== state.user.id)
        return receiver
    }

    if (loading) return <li>
        <Skeleton widthRandomness={0} width="100%" height="45px" />
    </li>

    return (
        <li>
            <NavLink
                to={`/chats/${chat}`} activeclass="active" className={classes.join(' ')}
            >
                <img src={`${api}${getReceiver().avatar.path.replace('./', '/')}`} alt={getReceiver().name} />
                <p>{getReceiver().name}</p>
            </NavLink>

            <CommonMutationButton options={{
                text: <FontAwesomeIcon icon={faTimes} />,
                classes: ['bd-chat__close'],
                mutation: CLOSE_USER_CHAT,
                variables: {
                    userId: state.user.id,
                    chatId: chat
                },
                handler: () => {
                    dispatch(closeChat(chat))
                    history.push('/')
                }
            }} />
        </li>
    )
}