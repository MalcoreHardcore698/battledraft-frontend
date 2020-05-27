import React, { useState, useEffect } from 'react'

import { Main } from './Main'
import { SideBar } from './SideBar'
import { SideFeed } from './SideFeed'

export const Hub = ({ state, setBackgroundColor, onChooseChat }) => {
    // eslint-disable-next-line
    const [chats, setChats] = useState({
        personal: [
            { id: 0, color: 'default', img: 'https://vignette.wikia.nocookie.net/gwent/images/4/48/Vernon_Roche_Avatar.png/revision/latest?cb=20180215150412', messages: [] },
            { id: 1, color: 'default',img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2KaXi7kejQqMQx-IE-N3ao8GKbtVewhVOtY3p295M6Te2gsrW&usqp=CAU', messages: [] }
        ],
        group: [
            { id: 2, color: 'orange', img: 'https://assets.gamerlinkapp.com/static-web/hub/hub_logo/hub_logo_fortnite.png', messages: [] },
            { id: 3, color: 'blue', img: 'https://assets.gamerlinkapp.com/static-web/hub/hub_logo/hub_logo_apexlegends.png', messages: [] },
            { id: 4, color: 'purple', img: 'https://assets.gamerlinkapp.com/static-web/hub/hub_logo/hub_logo_tomclancysrainbowsixsiege.png', messages: [] }
        ]
    })

    useEffect(() => {
        if (state.user.activeChat) setBackgroundColor(state.user.activeChat.color)
        else setBackgroundColor(null)
    }, [state.user.activeChat, setBackgroundColor])

    return (
        <div className="bd-hub">
            <SideBar state={state} chats={chats} setActiveChat={onChooseChat} />
            <Main state={state} chats={chats} />
            <SideFeed state={state} chats={chats} setActiveChat={onChooseChat} />
        </div>
    )
}