import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Skeleton from 'react-skeleton-loader'
import { CommonFetchFailure } from './../Common/CommonFetchFailure'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { GET_ALL_USER_TRANSACTIONS } from './../../../utils/queries'

export const UserBalance = () => {
    const { loading, error, data } = useQuery(GET_ALL_USER_TRANSACTIONS)

    if (loading) return <Skeleton widthRandomness={0} width="100%" height="256px" />
    if (error) return <CommonFetchFailure />

    return (
        <div className="bd-sidefeed__balance">
            <div className="bd-title-group">
                <h2><FontAwesomeIcon icon={faWallet} />Баланс</h2>
                <Link to="/cash">245,45 &#8381;</Link>
            </div>

            <ul className="bd-transactions__list">
                {data.allUserTransactions.map(transaction =>
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