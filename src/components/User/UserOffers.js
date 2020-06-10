import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { UserOffer } from './UserOffer'
import { CommonButton } from './../Common/CommonButton'
import Skeleton from 'react-skeleton-loader'
import { CommonFetchFailure } from './../Common/CommonFetchFailure'
import { GET_USER_OFFERS } from './../../utils/queries'
import { openModal } from './../../utils/actions'

export const UserOffers = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const { loading, error, data } = useQuery(GET_USER_OFFERS, {
        variables: { id: state.user.id }
    })

    if (loading) return <Skeleton widthRandomness={0} width="100%" height="256px" />
    if (error) return <CommonFetchFailure />
    
    return (
        <div className="bd-user-offers">
            <div className="bd-title-group">
                <h2><FontAwesomeIcon icon={faBell} />Мои заявки</h2>
            </div>
            {(!data.allUserOffers || data.allUserOffers.length === 0) ? 
                <p className="bd-commonempty">Заявок нет</p> :
                <ul className="offers">
                    {data.allUserOffers.map((offer, i) => <UserOffer key={i} offer={offer} />)}
                </ul>
            }
            <CommonButton text="Добавить заявку" handler={() => dispatch(openModal('add-offer', null))} />
        </div>
    )
}