import React from 'react'

import { ChatGroup } from './../Chat/ChatGroup'
import { ChatOffers } from './../Chat/ChatOffers'

export const SectionPopularChat = () => {
    const offers = [
        { avatar: '', nickname: 'Malcore', message: 'I have passed the golden age of this game and it\'s only downhil' },
        { avatar: '', nickname: 'Qewub', message: 'I have passed the golden age of this game and it\'s only downhil' }
    ]

    return (
        <aside className="bd-sidefeed__popular">
            <h2>Popular</h2>
            <ChatGroup />
            <ChatOffers offers={offers} />
        </aside>
    )
}