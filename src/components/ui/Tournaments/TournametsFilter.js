import React from 'react'

import { Block } from './../Block'

export const TournamentFilter = () => {
    const filters = ['All', 'Sponsored', 'My tournaments', 'Public', 'Private']
    
    const options = {
        buttonProps: (text, type) => {
            return {
                button: { text, type }
            }
        }
    }

    return (
        <div className="bd-tournaments-filter">
            <div className="bd-tournaments-filter-list">
                {filters.map(filter =>
                    <Block type="button" options={options.buttonProps(filter, 'filter')} />
                )}
            </div>
            
            <div className="bd-tournaments-filter-expand">
                <Block type="button" options={options.buttonProps('F', 'filter')} />
            </div>
        </div>
    )
}