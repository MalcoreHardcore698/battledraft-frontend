import React from 'react'

import { Button } from './CommonButton'

export const Block = ({ type, options }) => {
    return (
        <div className="bd-block-default">
            {(type === 'button') ?
                <Button text={options.button.text} type={options.button.type} /> 
            : ''}
        </div>
    )
}