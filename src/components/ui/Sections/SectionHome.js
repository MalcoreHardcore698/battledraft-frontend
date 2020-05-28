import React from 'react'

import { MainStream } from './SectionMainStream'
import { LastNews } from './SectionNews'

export const Home = ({ games, news }) => {
    return (
        <React.Fragment>
            <MainStream games={games} />
            <LastNews news={news} />
        </React.Fragment>
    )
}