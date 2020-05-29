import React from 'react'

import { MainStream } from './SectionMainStream'
import { LastNews } from './SectionNews'

export const SectionHome = ({ state, news }) => {
    return (
        <React.Fragment>
            <MainStream state={state} />
            <LastNews news={news} />
        </React.Fragment>
    )
}