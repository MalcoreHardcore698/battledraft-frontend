import React from 'react'

import { BlockTitle } from './../BlockTitle'
import { Paragraph } from './../Paragraph'

export const Support = () => {
    return (
        <div className="bd-about bd-center">
            <div className="bd-block-default">
                <BlockTitle title="Support" />

                <Paragraph text="Support" />
            </div>
        </div>
    )
}