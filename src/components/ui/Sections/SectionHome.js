import React from 'react'

import { SectionMainStream } from './SectionMainStream'
import { SectionNews } from './SectionNews'

export const SectionHome = ({ state, news }) => {
    return (
        <React.Fragment>
            <SectionMainStream state={state} />
            <SectionNews news={news} />
        </React.Fragment>
    )
}