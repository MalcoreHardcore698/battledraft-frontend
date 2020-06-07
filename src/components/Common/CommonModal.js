import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'
import Skeleton from 'react-skeleton-loader'
import { Link } from 'react-router-dom'
import { MainStreamBlock } from './../MainStream/MainStreamBlock'
import { CommonBlockTitle } from './CommonBlockTitle'
import { CommonInputField } from './CommonInputField'
import { CommonButton } from './CommonButton'
import { CommonCheckbox } from './CommonCheckbox'
import { CommonFetchFailure } from './../Common/CommonFetchFailure'
import { GET_ALL_HUBS } from './../../utils/queries'
import { authenticateUser, closeModal } from './../../utils/actions'

export const CommonModal = () => {
    const [checked, setCheckbox] = useState(true)
    const content = useSelector(state => state)
    const dispatch = useDispatch()
    const { loading, error, data } = useQuery(GET_ALL_HUBS, {
        variables: { status:  "PUBLISHED" }
    })

    const handlerSignOut = (e) => {
        dispatch(authenticateUser(false))
        dispatch(closeModal(content.modal.key, null))
        localStorage.removeItem('user')
    }

    if (loading) return <Skeleton widthRandomness={0} width="100%" height="256px" />
    if (error) return <CommonFetchFailure />

    switch (content.modal.key) {
        case 'offer':
            return (
                <div className="bd-modal">
                    <div
                        className="bd-modal__background"
                        onClick={() => dispatch(closeModal(content.modal.key, null))}
                    ></div>
                    <div className="bd-modal__body">
                        <CommonBlockTitle title="Информация" />
                        <div className="bd-offer">
                            <div className="title">
                                <img src={content.modal.content.user.avatar} alt={content.modal.content.user.name} />
                                <h5>{content.modal.content.user.name}</h5>
                            </div>
                            <div className="content">
                                <p className="title">{content.modal.content.title}</p>
                                <p className="message">{content.modal.content.message}</p>
                            </div>
                        </div>
                        <CommonButton text="Открыть чат" disabled={true} />
                    </div>
                </div>
            )
        case 'add-offer':
            return (
                <div className="bd-modal">
                    <div
                        className="bd-modal__background"
                        onClick={() => dispatch(closeModal(content.modal.key, null))}
                    ></div>
                    <div className="bd-modal__body">
                        <CommonBlockTitle title="Добавление заявки" />
                        <div className="bd-commonempty">
                            <p>Пока пусто</p>
                        </div>
                    </div>
                </div>
            )
        case 'create-tournament':
            return (
                <div className="bd-modal">
                    <div
                        className="bd-modal__background"
                        onClick={() => dispatch(closeModal(content.modal.key, null))}
                    ></div>
                    <div className="bd-modal__body">
                        <CommonBlockTitle title="Организация турнира" />
                        <div className="bd-commonempty">
                            <p>Пока пусто</p>
                        </div>
                    </div>
                </div>
            )
        case 'notifications':
            return (
                <div className="bd-modal">
                    <div
                        className="bd-modal__background"
                        onClick={() => dispatch(closeModal(content.modal.key, null))}
                    ></div>
                    <div className="bd-modal__body">
                        <CommonBlockTitle title="Уведомления" />
                        {(!content.user.notifications || content.user.notifications.length === 0) &&
                        <div className="bd-commonempty">
                            <p>Уведомления отсутствуют</p>
                        </div>}
                    </div>
                </div>
            )
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
                            {data.allHubs.map((hub, i) => (
                                <MainStreamBlock
                                    key={i}
                                    hub={hub}
                                />
                            ))}
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