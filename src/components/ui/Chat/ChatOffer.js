import React from 'react'

export const ChatOffer = ({ offer }) => {
    return (
        <li>
            <div className="title">
                <img src="https://vignette.wikia.nocookie.net/gwent/images/7/75/CirALt.png/revision/latest?cb=20170830181650" alt="Player" />
                <h5>{offer.nickname}</h5>
            </div>
            <div className="message">
                <p>{offer.message}</p>
            </div>
        </li>
    )
}