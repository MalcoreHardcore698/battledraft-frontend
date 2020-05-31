import React from 'react'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'

export const UserBalance = ({ state }) => {
    return (
        <div className="bd-sidefeed__balance">
            <div className="bd-title-group">
                <h2><FontAwesomeIcon icon={faWallet} />Баланс</h2>
                <Link to="/cash">245,45 &#8381;</Link>
            </div>

            <ul className="bd-transactions__list">
                {state.user.transactions.map(transaction =>
                    <li key={transaction.id} className="bd-transactions__list-item">
                        <div className="addition">
                            <p className="date">{transaction.date}</p>
                            <p className="cash">+{transaction.cash} &#8381;</p>
                        </div>

                        <div className="content">
                            <p className="desc">{transaction.title}</p>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}