import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

export const MainStreamBlock = ({ state, game, color, active, setCurrentModal, onOpenChat }) => {
    const [inactive, setInactive] = useState(false)

    const handlerOpenChat = () => {
        if (state.user.chats.find(chat => chat.id === game.id)) {
            setInactive(true)
        } else {
            onOpenChat(game.id, state.chats)
            setCurrentModal(null)
        }
    }

    useEffect(() => {
        if (state.user.chats.find(chat => chat.id === game.id)) {
            setInactive(true)
        }
    }, [game, state.user.chats])

    return (
        <Link
            to={`/chats/${game.id}`}
            className={`bd-main__mainstream-block ${color}${active ? ' active' : ''}${inactive ? ' inactive' : ''}`}
            onClick={handlerOpenChat}
        >
            <div className="content">
                <img src={game.img} alt="Game 1" />
                <p>{game.name}<span>{game.slogan}</span></p>
            </div>
        </Link>
    )
}