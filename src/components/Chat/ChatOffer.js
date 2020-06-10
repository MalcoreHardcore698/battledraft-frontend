import React from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from './../../utils/actions'
import { config } from './../../utils/config'

const api = config.get('api')

export const ChatOffer = ({ offer }) => {
    const dispatch = useDispatch()

    if (!offer.user) return null

    return (
        <li onClick={() => dispatch(openModal('offer', offer))}>
            <div className="hub" style={{ background: offer.hub.color || 'none' }}></div>
            <div className="title">
                <img src={`${api}${offer.user.avatar.replace('./', '/')}`} alt={offer.user.name} />
                <h5>{offer.user.name}</h5>
            </div>
            <div className="content">
                <p className="title">{offer.title}</p>
                <p className="message">{offer.message}</p>
            </div>
        </li>
    )
}