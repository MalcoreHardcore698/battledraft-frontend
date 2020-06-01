import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Skeleton from 'react-skeleton-loader'
import { CommonFetchFailure } from './../Common/CommonFetchFailure'
import { Link } from 'react-router-dom'
import { GET_ALL_TOURNAMENTS } from './../../../utils/queries'

export const Tournament = ({ touranament }) => {
    return (
        <div className="block">
            <Link to={`/touranaments/${touranament.id}`}>
                <div className="title">
                    <img src={touranament.poster} alt={touranament.title} />
                </div>
                <div className="description">
                    <h3>{touranament.title}</h3>
                    <p>{touranament.description}</p>
                </div>
            </Link>
        </div>
    )
}

export const SectionTournaments = () => {
    const { loading, error, data } = useQuery(GET_ALL_TOURNAMENTS)

    if (loading) return <Skeleton widthRandomness={0} width="100%" height="256px" />
    if (error) return <CommonFetchFailure />

    return (
        <div className="bd-navigator">
            <aside className="bd-sidefeed__groupchats">
                <h2>Открытые турниры</h2>
                {data.allTournaments.map(touranament =>
                    <Tournament key={touranament.id} touranament={touranament} />    
                )}
            </aside>
        </div>
    )
}