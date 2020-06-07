import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const MainStreamBlock = ({ hub, active, setCurrentModal, onOpenChat, onAddMember }) => {
    const content = useSelector(state => state)
    const [inactive, setInactive] = useState(false)

    const handlerOpenChat = () => {
        if (content.user.chats.find(chat => chat.id === hub.id)) {
            setInactive(true)
        } else {
            onOpenChat(hub.id, content.chats)
            onAddMember(hub.id, content.user)
            setCurrentModal(null)
        }
    }

    useEffect(() => {
        if (content.user.chats.find(chat => chat.id === hub.id)) {
            setInactive(true)
        }
    }, [hub, content.user.chats])

    return (
        <Link
            to={`/chats/${hub.id}`}
            className={`bd-hubblock ${active ? ' active' : ''}${inactive ? ' inactive' : ''}`}
            onClick={handlerOpenChat}
        >
            <div className="content">
                <img src={hub.img} alt="hub 1" />
                <p style={{ background: hub.color || 'gray' }}>{hub.title}<span>{hub.slogan}</span></p>
            </div>
        </Link>
    )
}