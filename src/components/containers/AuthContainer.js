import { connect } from 'react-redux'

import { Auth } from '../ui/Auth/Auth'

import {
    signIn
} from './../../utils/actions'

export const AuthContainer = connect(
    state => ({
        state
    }),
    dispatch => ({
        onSignIn: (login, password) => {
            dispatch(signIn(login, password))
        }
    })
)(Auth)