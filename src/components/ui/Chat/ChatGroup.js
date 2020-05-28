import React from 'react'

export const ChatGroup = () => {
    return (
        <div className="block">
            <div className="title">
                <img src="https://assets.gamerlinkapp.com/static-web/hub/hub_logo/hub_logo_fortnite.png" alt="Icon Game" />
                <ul>
                    <li><img src="https://vignette.wikia.nocookie.net/gwent/images/7/75/CirALt.png/revision/latest?cb=20170830181650" alt="Player 1" /></li>
                    <li><img src="https://vignette.wikia.nocookie.net/gwent/images/7/75/CirALt.png/revision/latest?cb=20170830181650" alt="Player 2" /></li>
                    <li>+13</li>
                </ul>
            </div>
            <div className="description">
                <h3>Apex Legends</h3>
                <p>Strategic Battle Royal</p>
            </div>
        </div>
    )
}