import React from 'react'

import { BlockTitle } from './../BlockTitle'
import { Paragraph } from './../Paragraph'

export const FAQ = () => {
    return (
        <div className="bd-about bd-center">
            <div className="bd-block-default">
                <BlockTitle title="FAQ" />

                <Paragraph text="FAQ" />
            </div>
        </div>
    )
}