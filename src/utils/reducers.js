import { combineReducers } from 'redux'
import C from './types'

export function userReducer(state = {}, action) {
    switch (action.type) {
        case C.USER_AUTH:
            return {
                ...state,
                id: action.payload.user.id,
                chats: action.payload.user.chats
            }
        case C.CHOOSE_CHAT:
            return {
                ...state,
                activeChat: action.payload
            }
        case C.OPEN_CHAT:
            return {
                ...state,
                chats: [
                    ...state.chats,
                    {
                        id: action.payload.chats.find(chat => chat.id === action.payload.chatId).id,
                        type: action.payload.chats.find(chat => chat.id === action.payload.chatId).type
                    }
                ]
            }
        case C.CLOSE_CHAT:
            return {
                ...state,
                chats: [
                    ...state.chats.filter(chat =>
                        (chat.id !== action.payload.chatId)
                    )
                ]
            }
        default:
            return state
    }
}

export function gamesReducer(state = {}, action) {
    switch (action.type) {
        default:
            return state
    }
}

export function chatsReducer(state = [], action) {
    switch (action.type) {
        case C.NEW_MESSAGE:
            return [
                ...state.map(chat =>
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
        case C.ADD_MEMBER:
            return [
                ...state.map(chat => (chat.id === action.payload.chatId) ? ({
                    ...chat,
                    members: [
                        ...chat.members,
                        {
                            id: action.payload.user.id,
                            name: action.payload.user.name,
                            avatar: action.payload.user.avatar
                        }
                    ]
                    }) : ({
                        ...chat
                    })
                )
            ]
        default:
            return state
    }
}

export const reducers = combineReducers({
    user: userReducer,
    games: gamesReducer,
    chats: chatsReducer
})