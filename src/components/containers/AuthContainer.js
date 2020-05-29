import { connect } from 'react-redux'

import { PageAuth } from './../ui/Pages/PageAuth'

import {
    authUser,
    regUser
} from './../../utils/actions'

export const AuthContainer = connect(
    state => ({
        state
    }),
    dispatch => ({
        onAuthUser: (login, password) => {
            const user = {
                id: 0,
                chats: []
            }

            dispatch(authUser(user))
        },
        onRegUser: (login, password, email, phone) => {
            dispatch(regUser(login, password, email, phone))
        }
    })
)(PageAuth)