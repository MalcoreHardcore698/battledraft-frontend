import React from 'react'
import { useDispatch } from 'react-redux'
import { FormAuth } from './../Form/FormAuth'
import { FormReg } from './../Form/FormReg'
import { CommonButton } from '../Common/CommonButton'
import { authenticateUser } from './../../../utils/actions'
import credentials from './../../../utils/credentials'

export const AuthContent = ({ method }) => {
    const dispatch = useDispatch()

    const handlerSubmit = (e) => {
        e.preventDefault()
        dispatch(authenticateUser(credentials))
    }

    return (
        <form className={`bd-auth__form ${(method === 'log') ? '' : ' switch'}`}>
            {(method === 'log') ? <FormAuth method={method} /> : ''}
            {(method === 'reg') ? <FormReg method={method} /> : ''}

            <CommonButton
                text={(method === 'log') ? 'Войти' : 'Зарегистрироваться'}
                type="accept"
                handler={handlerSubmit}
            />
        </form>
    )
}