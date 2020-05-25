import React from 'react'

import { BlockTitle } from './../BlockTitle'
import { Paragraph } from './../Paragraph'

export const UserLadderPanel = () => {
    return (
        <div className="bd-block-default">
            <BlockTitle title="Pro Ladder" />

            <Paragraph text="Here will be list of users" />
        </div>
    )
}