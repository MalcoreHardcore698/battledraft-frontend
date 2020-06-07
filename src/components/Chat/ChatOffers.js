import React from 'react'

import { ChatOffer } from './ChatOffer'

export const ChatOffers = ({ offers }) => {
    if (offers.length === 0) return (
        <p className="bd-commonempty">Заявок нет</p>
    )

    return (
        <ul className="offers">
            {(offers) ? offers.map((offer, i) => <ChatOffer key={i} offer={offer} />) : ''}
        </ul>
    )
}