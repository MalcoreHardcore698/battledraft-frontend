import { connect } from 'react-redux'

import { PageHub } from '../ui/Pages/PageHub'

import {
    chooseChat,
    newChat,
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
        onNewChat: () => {
            dispatch(newChat())
        },
        onNewMessage: (userId, chatId, message) => {
            dispatch(newMessage(userId, chatId, message))
        }
    })
)(PageHub)