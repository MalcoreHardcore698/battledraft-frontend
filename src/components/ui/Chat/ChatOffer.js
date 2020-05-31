import React from 'react'

export const ChatOffer = ({ offer }) => {
    if (!offer.user) return null
    return (
        <li>
            <div className="title">
                <img src={offer.user.avatar} alt={offer.user.name} />
                <h5>{offer.user.name}</h5>
            </div>
            <div className="message">
                <p>{offer.message}</p>
            </div>
        </li>
    )
}