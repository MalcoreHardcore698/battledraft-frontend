import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useLazyQuery } from '@apollo/react-hooks'
import { FormAuth } from './../Form/FormAuth'
import { FormReg } from './../Form/FormReg'
import { CommonButton } from '../Common/CommonButton'
import { authenticateUser } from './../../utils/actions'
import { AUTH_USER } from './../../utils/queries'
import Loading from './../../img/loading.svg'

export const AuthContent = ({ method }) => {
    const [authUser, { loading, data }] = useLazyQuery(AUTH_USER)

    const dispatch = useDispatch()
    const form = useRef(null)

    const [invalidLogin, setInvalidLogin] = useState(false)
    const [invalidPassword, setInvalidPassword] = useState(false)

    const handlerSubmit = () => {
        if (form.current) {
            const name = form.current.login.value
            const password = form.current.password.value

            if (!name) setInvalidLogin(true)
            if (!password) setInvalidPassword(true)

            if (name && password) {
                if (name.match(/@/)) authUser({ variables: {
                    email: name,
                    password
                } })
                else authUser({ variables: {
                    name, password
                }})
            }
        }
    }

    if (data && data.authUser) {
        dispatch(authenticateUser(data.authUser))
    }

    return (
        <form ref={form} className={`bd-auth__form ${(method === 'log') ? '' : ' switch'}`}>
            {(loading) ? <div className="bd-loading">
                <img src={Loading} alt="Loading" />
            </div> : ''}

            {(method === 'log') ? <FormAuth
                invalidLogin={invalidLogin}
                invalidPassword={invalidPassword}
                setInvalidLogin={setInvalidLogin}
                setInvalidPassword={setInvalidPassword}
            /> : ''}
            {(method === 'reg') ? <FormReg method={method} /> : ''}

            <CommonButton
                text={(method === 'log') ? 'Войти' : 'Зарегистрироваться'}
                type="accept"
                handler={handlerSubmit}
            />
        </form>
    )
}