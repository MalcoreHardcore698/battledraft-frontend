import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Skeleton from 'react-skeleton-loader'
import { CommonBlockTitle } from '../Common/CommonBlockTitle'
import { CommonFetchFailure } from '../Common/CommonFetchFailure'
import { GET_ALL_HUBS } from '../../utils/queries'
import { config } from './../../utils/config'

const api = config.get('api')

export const GreetingPreferences = () => {
    const { loading, error, data } = useQuery(GET_ALL_HUBS, {
        variables: { status:  "PUBLISHED" }
    })
    const [preferences, setPreferences] = useState([])
    
    return (
        <React.Fragment>
            <CommonBlockTitle title={`Выберите любимые игры${(preferences.length > 0) ? ` (${preferences.length})` : ''}`} />
            <p>Вы должны выбрать как минимум 3 игры. Мы подстроимся под ваши вкусы</p>
            <ul className="bd-perfomance__list">
                {loading ? <Skeleton widthRandomness={0} width="100%" height="256px" /> :
                (error) ? <CommonFetchFailure /> : data.allHubs.map((hub, iter) =>
                <li
                    key={iter}
                    onClick={() => (preferences.find(p => p.id === hub.id)) ?
                        setPreferences(pref => pref.filter(p => p.id !== hub.id)) :
                        setPreferences(pref => ([ ...pref, hub ]))
                    }
                    className={`bd-perfomance__list-item${
                        (preferences.find(p => p.id === hub.id)) ? ' checked' : ''
                    }`}
                    style={{ backgroundImage: `url(${`${api}/${hub.poster.path}`})`, backgroundSize: 'cover' }}
                >
                    <img style={{ background: hub.color || 'gray' }} src={`${api}/${hub.icon.path}`} alt="Apex" />
                    <p>{hub.title}</p>
                </li>    
            )}
            </ul>
        </React.Fragment>
    )
}