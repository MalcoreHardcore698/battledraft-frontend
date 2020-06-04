import React from 'react'

import { SectionMainStream } from './SectionMainStream'
import { SectionNews } from './SectionNews'

export const SectionHome = () => {
    return (
        <React.Fragment>
            <SectionMainStream />
            <SectionNews />
        </React.Fragment>
    )
}