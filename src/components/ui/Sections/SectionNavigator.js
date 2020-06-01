import React from 'react'

import { SectionPopularHub } from '../Sections/SectionPopularHub'
import { SectionOffers } from './SectionOffers'

export const SectionNavigator = ({ onOpenChat }) => {
    return (
        <div className="bd-navigator">
            <SectionOffers onOpenChat={onOpenChat} />
            <SectionPopularHub onOpenChat={onOpenChat} />
        </div>
    )
}