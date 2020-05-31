import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { CommonBlockTitle } from './CommonBlockTitle'
import { CommonInputField } from './CommonInputField'
import { CommonCheckbox } from './CommonCheckbox'
import { MainStreamBlock } from './../MainStream/MainStreamBlock'

export const CommonModal = ({
    state,
    currentModal,
    setCurrentModal,
    setAuthenticated,
    onOpenChat,
    onAddMember
}) => {
    const [checked, setCheckbox] = useState(true)

    const handlerSignOut = (e) => {
        setAuthenticated(false)
        localStorage.setItem('isAuthenticated', 'false')
    }

    switch (currentModal) {
        case 'groupchats':
            return (
                <div className="bd-modal">
                    <div
                        className="bd-modal__background"
                        onClick={() => setCurrentModal(null)}
                    ></div>
                    <div className="bd-modal__body">
                        <CommonBlockTitle title="Выбери свое сообщество" />
                        <div className="bd-modal__body-groupchats">
                            {state.games.map((game, i) => (
                                <MainStreamBlock
                                    key={i}
                                    state={state}
                                    game={game}
                                    onOpenChat={onOpenChat}
                                    onAddMember={onAddMember}
                                    setCurrentModal={setCurrentModal}
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
                        onClick={() => setCurrentModal(null)}
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