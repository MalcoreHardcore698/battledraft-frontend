import C from './types'

export function authenticateUser(user) {
    return {
        type: C.USER_AUTH,
        payload: {
            user
        }
    }
}

export function chooseChat(chat) {
    return {
        type: C.CHOOSE_CHAT,
        payload: chat
    }
}

export function openChat(chatId, chats) {
    return {
        type: C.OPEN_CHAT,
        payload: {
            chatId, chats
        }
    }
}

export function closeChat(chatId) {
    return {
        type: C.CLOSE_CHAT,
        payload: {
            chatId
        }
    }
}

export function addMember(chatId, user) {
    return {
        type: C.ADD_MEMBER,
        payload: {
            chatId, user
        }
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

export function openModal(key, content) {
    return {
        type: C.OPEN_MODAL,
        payload: {
            key, content
        }
    }
}

export function closeModal(key) {
    return {
        type: C.CLOSE_MODAL,
        payload: {
            key
        }
    }
}