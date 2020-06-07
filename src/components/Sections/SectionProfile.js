import React from 'react'
import { UserPreferences } from './../User/UserPreferences'
import { UserOffers } from './../User/UserOffers'
import { UserTournaments } from './../User/UserTournaments'

export const SectionProfile = () => {
    return (
        <div className="bd-profile">
            <UserPreferences />
            <UserOffers />
            <UserTournaments />
        </div>
    )
}