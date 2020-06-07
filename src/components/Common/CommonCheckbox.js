import React from 'react'

import CheckIcon from './../../img/check.svg'

export const CommonCheckbox = ({ label, checked, setCheckbox }) => {
    return (
        <div
            className={`bd-checkboxfield${(checked) ? ' checked' : ''}`}
            onClick={() => setCheckbox(!checked)}
        >
            <div className="bd-checkmark">
                <span></span>
                {(checked) ? <img src={CheckIcon} alt="Check Icon" /> : ''}
            </div>
            <p>{label}</p>
        </div>
    )
}