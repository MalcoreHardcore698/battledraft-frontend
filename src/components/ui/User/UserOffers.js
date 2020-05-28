import React from 'react'

import { UserOffer } from './UserOffer'

export const UserOffers = ({ offers }) => {
    return (
        <ul className="offers">
            {offers.map((offer, i) => <UserOffer key={i} offer={offer} />)}
        </ul>
    )
}