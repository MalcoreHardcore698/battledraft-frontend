import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'

export const UserBalance = () => {
    const state = useSelector(state => state)

    return (
        <div className="bd-sidefeed__balance">
            <div className="bd-title-group">
                <h2><FontAwesomeIcon icon={faWallet} />Баланс</h2>
                <Link to="/cash">{state.user.balance ? state.user.balance : 0} &#8381;</Link>
            </div>

            <ul className="bd-transactions__list">
                {(!state.user.transactions || state.user.transactions.length === 0) &&
                <div className="bd-commonempty">
                    <p>Транзакции отсутствуют</p>
                </div>}
                {(state.user.transactions) && state.user.transactions.map(transaction =>
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