import React from 'react'

import { CommonButton } from './../Common/CommonButton'

export const PagePerfomance = () => {
    return (
        <div className="bd-perfomance bd-center">
            <h2>Выберите любимые игры</h2>
            <ul className="bd-perfomance__list">
                {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((hub, iter) =>
                    <li key={iter} className="bd-perfomance__list-item">
                        <img src="https://assets.gamerlinkapp.com/static-web/hub/hub_logo/hub_logo_apexlegends.png" alt="Apex" />
                        <p>Apex legends</p>
                    </li>    
                )}
            </ul>

            <div className="bd-perfomance__action">
                <CommonButton text="Далее" type="accept"/>
            </div>
        </div>
    )
}