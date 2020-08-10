import React from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from './../../utils/actions'
import { config } from './../../utils/config'

const api = config.get('api')

export const UserOffer = ({ offer }) => {
    const dispatch = useDispatch()
    return (
        <li onClick={() => dispatch(openModal('offer', offer))}>
            <div className="hub" style={{ background: offer.hub.color || 'none' }}></div>
            <div className="title">
                <img src={`${api}${offer.user.avatar.path.replace('./', '/')}`} alt={offer.user.name} />
                <h5>{offer.user.name}</h5>
            </div>
            <div className="message">
                <p>{offer.title}</p>
                <p>{offer.message}</p>
            </div>
        </li>
    )
}