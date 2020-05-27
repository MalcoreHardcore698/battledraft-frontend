import { combineReducers } from 'redux'
import C from './types'

export function userReducer(state = {}, action) {
    switch (action.type) {
        case C.SIGN_IN:
            return {
                ...state,
                isAuthenticated: true,
                login: action.payload.login,
                password: action.payload.password
            }
        case C.CHOOSE_CHAT:
            return {
                ...state,
                activeChat: action.payload
            }
        case C.NEW_CHAT:
            return state
        case C.NEW_MESSAGE:
            return {
                ...state,
                chats: [
                    ...state.chats.map(chat =>
                        (chat.id === action.payload.chatId) ? ({
                            ...chat,
                            messages: [
                                ...chat.messages,
                                {
                                    userId: action.payload.userId,
                                    avatar: 'https://vignette.wikia.nocookie.net/gwent/images/e/e7/Geralt_Intoxicated_Avatar.png/revision/latest/scale-to-width-down/340?cb=20180114003913',
                                    content: action.payload.message,
                                    date: new Date()
                                }
                            ]
                        }) : ({
                            ...chat
                        })
                    )
                ]
            }
        default:
            return state
    }
}

export const reducers = combineReducers({
    user: userReducer
})