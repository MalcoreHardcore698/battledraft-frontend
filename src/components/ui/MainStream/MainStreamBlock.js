import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

export const MainStreamBlock = ({ game, active, setCurrentModal, onOpenChat, onAddMember }) => {
    const content = useSelector(state => state)
    const [inactive, setInactive] = useState(false)

    const handlerOpenChat = () => {
        if (content.user.chats.find(chat => chat.id === game.id)) {
            setInactive(true)
        } else {
            onOpenChat(game.id, content.chats)
            onAddMember(game.id, content.user)
            setCurrentModal(null)
        }
    }

    useEffect(() => {
        if (content.user.chats.find(chat => chat.id === game.id)) {
            setInactive(true)
        }
    }, [game, content.user.chats])

    return (
        <Link
            to={`/chats/${game.id}`}
            className={`bd-main__mainstream-block ${game.color}${active ? ' active' : ''}${inactive ? ' inactive' : ''}`}
            onClick={handlerOpenChat}
        >
            <div className="content">
                <img src={game.img} alt="Game 1" />
                <p>{game.title}<span>{game.slogan}</span></p>
            </div>
        </Link>
    )
}