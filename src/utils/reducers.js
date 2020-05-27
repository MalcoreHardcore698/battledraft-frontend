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
        default:
            return state
    }
}

export const reducers = combineReducers({
    user: userReducer
})