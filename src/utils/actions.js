import C from './types'

export function signIn(login, password) {
    return {
        type: C.SIGN_IN,
        payload: {
            login, password
        }
    }
}

export function chooseChat(chat) {
    return {
        type: C.CHOOSE_CHAT,
        payload: chat
    }
}

export function newChat() {
    return {
        type: C.NEW_CHAT
    }
}