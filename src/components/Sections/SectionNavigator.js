import React, { useState } from 'react'

import { SectionPopularHub } from '../Sections/SectionPopularHub'
import { SectionOffers } from './SectionOffers'

export const SectionNavigator = () => {
    const [filter, setFilter] = useState(null)

    return (
        <div className="bd-navigator">
            <SectionPopularHub filter={filter} setFilter={setFilter} />
            <SectionOffers filter={filter} />
        </div>
    )
}