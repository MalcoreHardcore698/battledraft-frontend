import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { CommonBlockTitle } from './CommonBlockTitle'
import { CommonInputField } from './CommonInputField'
import { CommonCheckbox } from './CommonCheckbox'
import { CommonFetchFailure } from './../Common/CommonFetchFailure'
import { authenticateUser, closeModal } from './../../../utils/actions'

export const CommonModal = () => {
    const [checked, setCheckbox] = useState(true)
    const content = useSelector(state => state)
    const dispatch = useDispatch()

    const handlerSignOut = (e) => {
        dispatch(authenticateUser(null))
        dispatch(closeModal(content.modal.key, null))
        localStorage.setItem('isAuthenticated', 'false')
    }

    switch (content.modal.key) {
        case 'new-group-chat':
            return (
                <div className="bd-modal">
                    <div
                        className="bd-modal__background"
                        onClick={() => dispatch(closeModal(content.modal.key, null))}
                    ></div>
                    <div className="bd-modal__body">
                        <CommonBlockTitle title="Выбери свое сообщество" />
                        <div className="bd-modal__body-groupchats">
                            <CommonFetchFailure />
                        </div>
                    </div>
                </div>
            )
        case 'settings':
            return (
                <div className="bd-modal">
                    <div
                        className="bd-modal__background"
                        onClick={() => dispatch(closeModal(content.modal.key, null))}
                    ></div>
                    <div className="bd-modal__body settings">
                        <CommonBlockTitle title="Настройки" />
                        
                        <CommonInputField name="email" label="Изменить электронную почту" type="text" />
                        <CommonInputField name="password" label="Изменить пароль" type="password" />
                        <CommonInputField name="phone" label="Изменить телефон" type="tel" />
                        <CommonCheckbox label="Уведомления на почту" checked={checked} setCheckbox={setCheckbox} />
                    </div>
                    <Link to="/" onClick={handlerSignOut} className="bd-signout">Выйти</Link>
                </div>
            )
        default:
            return null
    }
}