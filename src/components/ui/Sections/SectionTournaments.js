import React from 'react'

import { Link } from 'react-router-dom'

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
    const touranaments = [
        { id: 0, title: 'Gwent Open #1', description: 'New epic cup for favourite CCG', poster: 'https://mmo.one/upload/iblock/c3b/gwent-open.jpg' },
        { id: 1, title: 'Gwent Open #1', description: 'New epic cup for favourite CCG', poster: 'https://mmo.one/upload/iblock/c3b/gwent-open.jpg' },
        { id: 2, title: 'Gwent Open #1', description: 'New epic cup for favourite CCG', poster: 'https://mmo.one/upload/iblock/c3b/gwent-open.jpg' }
    ]

    return (
        <div className="bd-navigator">
            <aside className="bd-sidefeed__groupchats">
                <h2>Открытые турниры</h2>
                {touranaments.map(touranament =>
                    <Tournament key={touranament.id} touranament={touranament} />    
                )}
            </aside>
        </div>
    )
}