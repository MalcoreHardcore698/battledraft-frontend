import C from './types'

export function signIn(login, password) {
    return {
        type: C.SIGN_IN,
        payload: {
            login, password
        }
    }
}