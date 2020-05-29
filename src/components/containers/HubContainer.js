import { connect } from 'react-redux'

import { PageHub } from '../ui/Pages/PageHub'

import {
    chooseChat,
    openChat,
    closeChat,
    newMessage
} from './../../utils/actions'

export const HubContainer = connect(
    state => ({
        state
    }),
    dispatch => ({
        onChooseChat: (id) => {
            dispatch(chooseChat(id))
        },
        onOpenChat: (chatId, chats) => {
            dispatch(openChat(chatId, chats))
        },
        onCloseChat: (chat) => {
            dispatch(closeChat(chat))
        },
        onNewMessage: (userId, chatId, message) => {
            dispatch(newMessage(userId, chatId, message))
        }
    })
)(PageHub)