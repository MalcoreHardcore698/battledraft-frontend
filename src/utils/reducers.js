import { combineReducers } from 'redux'
import C from './types'

export function userReducer(state = {}, action) {
    switch (action.type) {
        case C.USER_AUTH:
            return {
                ...state,
                ...action.payload
            }
        case C.USER_PREFERENCES:
            return {
                ...state,
                preferences: action.payload.preferences
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