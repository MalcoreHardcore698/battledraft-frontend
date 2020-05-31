import React from 'react'

import { ChatOffer } from './ChatOffer'

export const ChatOffers = ({ offers }) => {
    return (
        <ul className="offers">
            {(offers) ? offers.map((offer, i) => <ChatOffer key={i} offer={offer} />) : ''}
        </ul>
    )
}