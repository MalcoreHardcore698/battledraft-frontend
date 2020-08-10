import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import { MainStreamBlock } from './../MainStream/MainStreamBlock'
import { Greeting } from './../Greeting/Greeting'
import { CommonBlockTitle } from './CommonBlockTitle'
import { CommonInputField } from './CommonInputField'
import { CommonMutationButton } from './CommonMutationButton'
import { CommonCheckbox } from './CommonCheckbox'
import { UserAddOffer } from './../User/UserAddOffer'
import { GET_ALL_HUBS, ADD_CHAT } from './../../utils/queries'
import { authenticateUser, closeModal, addChat } from './../../utils/actions'
import { config } from './../../utils/config'

const api = config.get('api')

export const CommonModal = () => {
    const [checked, setCheckbox] = useState(true)
    const content = useSelector(state => state)
    const dispatch = useDispatch()
    let history = useHistory()

    const { data } = useQuery(GET_ALL_HUBS, {
        variables: { status:  "PUBLISHED" }
    })

    const handlerSignOut = (e) => {
        dispatch(authenticateUser(false))
        dispatch(closeModal(content.modal.key, null))
        localStorage.removeItem('user')
    }

    switch (content.modal.key) {
        case 'greeting':
            return (
                <div className="bd-modal">
                    <div className="bd-modal__background"></div>
                    <div className="bd-modal__body">
                        <Greeting />
                    </div>
                </div>
            )
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
                                <img src={`${api}${content.modal.content.user.avatar.path.replace('./', '/')}`} alt={content.modal.content.user.name} />
                                <h5>{content.modal.content.user.name}</h5>
                            </div>
                            <div className="content">
                                <p className="title">{content.modal.content.title}</p>
                                <p className="message">{content.modal.content.message}</p>
                            </div>
                        </div>

                        {(content.user.id !== content.modal.content.user.id) &&
                            <CommonMutationButton options={{
                                text: 'Открыть чат',
                                classes: ['bd-chat__close'],
                                mutation: ADD_CHAT,
                                variables: {
                                    id: content.user.id,
                                    title: content.modal.content.title,
                                    participants: [
                                        { id: content.user.id },
                                        { id: content.modal.content.user.id }
                                    ],
                                    owner: content.modal.content.user.id
                                },
                                handler: (res) => {
                                    const chatId = res.data.addChat
                                    
                                    dispatch(addChat(chatId))
                                    dispatch(closeModal())

                                    history.push(`/chats/${chatId}`)
                                }
                            }} />
                        }
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
                        <UserAddOffer hubs={data.allHubs} />
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