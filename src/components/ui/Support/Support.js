import React from 'react'

import { BlockTitle } from './../BlockTitle'
import { Paragraph } from './../Paragraph'

export const Support = () => {
    return (
        <div className="bd-areamain bd-support">
            <h1>Support</h1>
            <div className="bd-block-default">
                <BlockTitle title="Support" />

                <Paragraph text="Support" />
            </div>
        </div>
    )
}