import React from 'react'

import { SectionMainStream } from './SectionMainStream'
import { SectionNews } from './SectionNews'

export const SectionHome = ({ news }) => {
    return (
        <React.Fragment>
            <SectionMainStream />
            <SectionNews news={news} />
        </React.Fragment>
    )
}