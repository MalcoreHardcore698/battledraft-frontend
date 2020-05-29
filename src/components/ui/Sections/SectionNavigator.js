import React from 'react'

import { SectionPopularChat } from '../Sections/SectionPopularChat'
import { SectionBestChats } from '../Sections/SectionBestChats'

export const SectionNavigator = ({ state, onOpenChat }) => {
    return (
        <div className="bd-navigator">
            <SectionBestChats state={state} onOpenChat={onOpenChat} />
            <SectionPopularChat state={state} onOpenChat={onOpenChat} />
        </div>
    )
}