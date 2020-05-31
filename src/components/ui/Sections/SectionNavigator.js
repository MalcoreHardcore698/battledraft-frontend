import React from 'react'

import { SectionPopularHub } from '../Sections/SectionPopularHub'
import { SectionOffers } from './SectionOffers'

export const SectionNavigator = ({ state, onOpenChat }) => {
    return (
        <div className="bd-navigator">
            <SectionOffers state={state} onOpenChat={onOpenChat} />
            <SectionPopularHub state={state} onOpenChat={onOpenChat} />
        </div>
    )
}