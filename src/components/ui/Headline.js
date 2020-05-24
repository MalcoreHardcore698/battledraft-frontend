import React from 'react'

import { Navigation } from './Navigation'

export const Headline = ({ isAuthenticated, setAuthenticated, setTitleOfPage }) => {
    return (
        <div className="bd-headline">
            <Navigation isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} setTitleOfPage={setTitleOfPage} />
        </div>
    )
}