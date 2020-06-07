import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { UserOffer } from './UserOffer'
import { CommonButton } from './../Common/CommonButton'
import { openModal } from './../../utils/actions'

export const UserTournaments = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className="bd-user-tournaments">
            <div className="bd-title-group">
                <h2><FontAwesomeIcon icon={faTrophy} />Мои турниры</h2>
            </div>
            {(!state.user.offers || state.user.offers.length === 0) ? 
                <p className="bd-commonempty">Турниров нет</p> :
                <ul className="offers">
                    {state.user.offers.map((offer, i) => <UserOffer key={i} offer={offer} />)}
                </ul>
            }
            <div className="bd-groupfield">
                <Link to="/tournaments"><CommonButton text="Найти турнир" /></Link>
                <CommonButton text="Организовать турнир" handler={() => dispatch(openModal('create-tournament', null))} />
            </div>
        </div>
    )
}