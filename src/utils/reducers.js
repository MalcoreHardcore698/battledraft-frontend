import { combineReducers } from 'redux'
import C from './types'

export function userReducer(state = {}, action) {
    switch (action.type) {
        case C.USER_AUTH:
            return (!action.payload) ? null : ({
                ...state,
                ...action.payload
            })
        case C.USER_PREFERENCES:
            return {
                ...state,
                preferences: action.payload.preferences
            }
        case C.ADD_CHAT:
            return {
                ...state,
                chats: state.chats.map(chat => (chat.userId !== action.payload.chatId) ? ({
                    chatId: action.payload.chatId
                }) : chat),
            }
        case C.CLOSE_CHAT:
            return {
                ...state,
                chats: state.chats.filter(chat =>
                    (chat.chatId !== action.payload.chatId)
                )
            }
        default:
            return state
    }
}

export function modalReducer(state = {}, action) {
    switch (action.type) {
        case C.OPEN_MODAL:
            return {
                key: action.payload.key,
                content: action.payload.content
            }
        case C.CLOSE_MODAL:
            return {
                key: null,
                content: null
            }
        default:
            return state
    }
}

export const reducers = combineReducers({
    user: userReducer,
    modal: modalReducer
})