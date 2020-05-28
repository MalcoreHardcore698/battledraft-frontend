import React from 'react'

import { SectionPopularChat } from '../Sections/SectionPopularChat'
import { SectionBestChats } from '../Sections/SectionBestChats'

export const SectionNavigator = () => {
    return (
        <div className="bd-navigator">
            <SectionBestChats />
            <SectionPopularChat />
        </div>
    )
}