import React from 'react'

import { MainStream } from './SectionMainStream'
import { LastNews } from './SectionNews'

export const SectionHome = ({ games, news }) => {
    return (
        <React.Fragment>
            <MainStream games={games} />
            <LastNews news={news} />
        </React.Fragment>
    )
}