import React from 'react'

import { SectionMainStream } from './SectionMainStream'
import { SectionOffers } from './SectionOffers'
import { SectionNews } from './SectionNews'

export const SectionHome = () => {
    return (
        <div className="bd-home">
            <SectionMainStream />
            <SectionNews />
            <SectionOffers />
        </div>
    )
}