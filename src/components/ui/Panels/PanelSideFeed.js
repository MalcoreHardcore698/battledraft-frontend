import React from 'react'
import { SectionPopularChat } from '../Sections/SectionsPopularChat'
import { SectionBestChats } from '../Sections/SectionsBestChats'

export const PanelSideFeed = () => {
    return (
        <section className="bd-sidefeed">
            <SectionBestChats />
            <SectionPopularChat />
        </section>
    )
}