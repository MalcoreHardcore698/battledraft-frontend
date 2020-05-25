import React from 'react'

import { TournamentFilter } from './TournametsFilter'
import { TournamentItem } from './TournametsItem'

export const Tournaments = () => {
    return (
        <div className="bd-areamain bd-tournaments">
            <h1>Tournaments</h1>

            <TournamentFilter />

            <div className="bd-tournaments-list">
                {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map(tournament =>
                    <TournamentItem />
                )}
            </div>
        </div>
    )
}