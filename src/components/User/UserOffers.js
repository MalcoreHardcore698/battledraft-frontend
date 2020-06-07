import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { UserOffer } from './UserOffer'
import { CommonButton } from './../Common/CommonButton'
import { openModal } from './../../utils/actions'

export const UserOffers = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    
    return (
        <div className="bd-user-offers">
            <div className="bd-title-group">
                <h2><FontAwesomeIcon icon={faBell} />Мои заявки</h2>
            </div>
            {(!state.user.offers || state.user.offers.length === 0) ? 
                <p className="bd-commonempty">Заявок нет</p> :
                <ul className="offers">
                    {state.user.offers.map((offer, i) => <UserOffer key={i} offer={offer} />)}
                </ul>
            }
            <CommonButton text="Добавить заявку" handler={() => dispatch(openModal('add-offer', null))} />
        </div>
    )
}