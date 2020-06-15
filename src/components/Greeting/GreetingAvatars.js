import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Skeleton from 'react-skeleton-loader'
import { CommonBlockTitle } from '../Common/CommonBlockTitle'
import { GET_ALL_AVATARS } from '../../utils/queries'
import { config } from './../../utils/config'

const api = config.get('api')

export const GreetingAvatars = () => {
    const { loading, data } = useQuery(GET_ALL_AVATARS)
    const [checked, setChecked] = useState([])

    if (loading) {
        return (
            <React.Fragment>
                <CommonBlockTitle title="Выберите аватар" />
                <ul className="bd-avatar__list">
                    <li className="bd-avatar__list-item"><Skeleton widthRandomness={0} width="100%" /></li>
                    <li className="bd-avatar__list-item"><Skeleton widthRandomness={0} width="100%" /></li>
                    <li className="bd-avatar__list-item"><Skeleton widthRandomness={0} width="100%" /></li>
                    <li className="bd-avatar__list-item"><Skeleton widthRandomness={0} width="100%" /></li>
                </ul>
            </React.Fragment>
        )
    }
    
    return (
        <React.Fragment>
            <CommonBlockTitle title="Выберите аватар" />
            <ul className="bd-avatar__list">
                {data.allAvatars.map((avatar, iter) =>
                <li
                    key={iter}
                    onClick={() => setChecked(checked ? null : avatar)}
                    className={`bd-avatar__list-item${
                        (checked && checked.id === avatar.id) ? ' checked' : ''
                    }`}
                >
                    <div className="avatar">
                        <img src={`${api}/${avatar.path}`} alt="Avatar" />
                    </div>
                    <div className="hub">
                        <img src={`${api}/${avatar.hub.icon.path}`} alt="Hub Icon" />
                    </div>
                </li>    
            )}
            </ul>
        </React.Fragment>
    )
}