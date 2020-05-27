import React from 'react'

export const GroupChat = () => {
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

export const GroupChats = () => {
    return (
        <aside className="bd-sidefeed__groupchats">
            <h2>Group Chats</h2>
            <GroupChat />
            <GroupChat />
        </aside>
    )
}

export const Offer = ({ offer }) => {
    return (
        <li>
            <div className="title">
                <img src="https://vignette.wikia.nocookie.net/gwent/images/7/75/CirALt.png/revision/latest?cb=20170830181650" alt="Player" />
                <h5>{offer.nickname}</h5>
            </div>
            <div className="message">
                <p>{offer.message}</p>
            </div>
        </li>
    )
}

export const Offers = ({ offers }) => {
    return (
        <ul className="offers">
            {offers.map((offer, i) => <Offer key={i} offer={offer} />)}
        </ul>
    )
}

export const Popular = () => {
    const offers = [
        { avatar: '', nickname: 'Malcore', message: 'I have passed the golden age of this game and it\'s only downhil' },
        { avatar: '', nickname: 'Qewub', message: 'I have passed the golden age of this game and it\'s only downhil' }
    ]

    return (
        <aside className="bd-sidefeed__popular">
            <h2>Popular</h2>
            <GroupChat />
            <Offers offers={offers} />
        </aside>
    )
}

export const SideFeed = () => {
    return (
        <section className="bd-sidefeed">
            <GroupChats />
            <Popular />
        </section>
    )
}