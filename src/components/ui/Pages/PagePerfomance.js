import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'
import Skeleton from 'react-skeleton-loader'
import { CommonFetchFailure } from './../Common/CommonFetchFailure'
import { CommonButton } from './../Common/CommonButton'
import { GET_ALL_HUBS } from './../../../utils/queries'
import { preferencesUser } from './../../../utils/actions'

export const PagePerfomance = () => {
    const { loading, error, data } = useQuery(GET_ALL_HUBS)
    const [preferences, setPreferences] = useState([])
    const dispatch = useDispatch()

    if (loading) return (
        <div className="bd-perfomance bd-center">
            <Skeleton widthRandomness={0} width="100%" height="256px" />
        </div>
    )

    if (error) return (
        <div className="bd-perfomance bd-center">
            <CommonFetchFailure />
        </div>
    )
    
    return (
        <div className="bd-perfomance bd-center">
            <h2>Выберите любимые игры{(preferences.length > 0) ? ` (${preferences.length})` : ''}</h2>
            <p>Вы должны выбрать как минимум 3 игры. Мы подстроимся под ваши вкусы</p>
            <ul className="bd-perfomance__list">
                {data.allHubs.map((hub, iter) =>
                    <li
                        key={iter}
                        onClick={() => (preferences.find(p => p.id === hub.id)) ?
                            setPreferences(pref => pref.filter(p => p.id !== hub.id)) :
                            setPreferences(pref => ([ ...pref, hub ]))
                        }
                        className={`bd-perfomance__list-item${
                            (preferences.find(p => p.id === hub.id)) ? ' checked' : ''
                        }`}
                        style={{ backgroundImage: `url(${hub.poster})`, backgroundSize: 'cover' }}
                    >
                        <img style={{ background: hub.color || 'gray' }} src={hub.icon} alt="Apex" />
                        <p>{hub.title}</p>
                    </li>    
                )}
            </ul>

            <div className="bd-perfomance__action">
                <CommonButton
                    text="Далее"
                    type="accept"
                    disabled={(preferences.length < 3)}
                    handler={() => dispatch(preferencesUser(preferences))}
                />
            </div>
        </div>
    )
}