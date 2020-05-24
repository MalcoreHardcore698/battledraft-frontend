import React from 'react'

import { BlockTitle } from './../BlockTitle'
import { Paragraph } from './../Paragraph'

export const Tournaments = () => {
    return (
        <div className="bd-tournaments bd-center">
            <div className="bd-block-default">
                <BlockTitle title="Tournaments" />
                <Paragraph text="Welcome to Tournaments!" />
            </div>
        </div>
    )
}