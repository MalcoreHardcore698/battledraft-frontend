import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Skeleton from 'react-skeleton-loader'
import { CommonFetchFailure } from './../Common/CommonFetchFailure'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { GET_ALL_HUBS } from './../../utils/queries'
import { config } from './../../utils/config'

const api = config.get('api')

export const SectionPopularHub = ({ filter, setFilter }) => {
    const { loading, error, data } = useQuery(GET_ALL_HUBS, {
        variables: { status:  "PUBLISHED" }
    })

    if (loading) return <Skeleton widthRandomness={0} width="100%" height="256px" />
    if (error) return <CommonFetchFailure />

    return (
        <aside className="bd-navigator__popular">
            <div className="bd-title-group">
                <h2 className="bd-sectiontitle"><FontAwesomeIcon icon={faFire} />Популярные сообщества</h2>
            </div>

            <div className="bd-navigator__hublist">
                {data.allHubs.map(hub =>
                    <div
                        key={hub.id}
                        className={`bd-hubblock${hub.id === filter ? ' active' : ''}`}
                        onClick={() => setFilter(prev => prev === hub.id ? null : hub.id)}
                        style={{ background: hub.id === filter ? hub.color : 'none'}}
                    >
                        <div className="content">
                            <img src={`${api}${hub.icon.replace('./', '/')}`} alt={hub.icon} />
                            <div className="info">
                                <p className="title">{hub.title}</p>
                                <p className="slogan">{hub.slogan}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </aside>
    )
}