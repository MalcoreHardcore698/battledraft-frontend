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
        onOpenChat: () => {
            dispatch(openChat())
        },
        onCloseChat: () => {
            dispatch(closeChat())
        },
        onNewMessage: (userId, chatId, message) => {
            dispatch(newMessage(userId, chatId, message))
        }
    })
)(PageHub)