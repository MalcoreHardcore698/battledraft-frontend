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

export function openChat() {
    return {
        type: C.OPEN_CHAT
    }
}

export function closeChat() {
    return {
        type: C.CLOSE_CHAT
    }
}

export function newMessage(userId, chatId, message) {
    return {
        type: C.NEW_MESSAGE,
        payload: {
            userId, chatId, message
        }
    }
}