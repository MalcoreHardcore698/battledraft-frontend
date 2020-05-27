import React, { useState, useEffect } from 'react'

import { Main } from './Main'
import { SideBar } from './SideBar'
import { SideFeed } from './SideFeed'
import { Modal } from './Modal'

export const Hub = ({ state, onChooseChat, onNewMessage }) => {
    const [currentArticle, setCurrentArticle] =useState(null)
    const [currentModal, setCurrentModal] = useState(null)
    const [currentGame, setCurrentGame] = useState(null)
    const [backgroundColor, setBackgroundColor] = useState(null)

    const games = [
        { id: 0, name: 'League of Legend', img: 'https://i0.wp.com/itc.ua/wp-content/uploads/2020/02/fortnite-top-secret.jpg?fit=2000%2C1114&amp;quality=100&amp;strip=all&amp;ssl=1', icon: 'https://i0.wp.com/itc.ua/wp-content/uploads/2020/02/fortnite-top-secret.jpg?fit=2000%2C1114&amp;quality=100&amp;strip=all&amp;ssl=1', slogan: 'Find Your Role'},
        { id: 1, name: 'Fortnite', img: 'https://i0.wp.com/itc.ua/wp-content/uploads/2020/02/fortnite-top-secret.jpg?fit=2000%2C1114&amp;quality=100&amp;strip=all&amp;ssl=1', icon: 'https://i0.wp.com/itc.ua/wp-content/uploads/2020/02/fortnite-top-secret.jpg?fit=2000%2C1114&amp;quality=100&amp;strip=all&amp;ssl=1', slogan: 'Find Your Role'},
        { id: 2, name: 'Gwent', img: 'https://i0.wp.com/itc.ua/wp-content/uploads/2020/02/fortnite-top-secret.jpg?fit=2000%2C1114&amp;quality=100&amp;strip=all&amp;ssl=1', icon: 'https://i0.wp.com/itc.ua/wp-content/uploads/2020/02/fortnite-top-secret.jpg?fit=2000%2C1114&amp;quality=100&amp;strip=all&amp;ssl=1', slogan: 'Find Your Role'},
        { id: 3, name: 'Dota 2', img: 'https://i0.wp.com/itc.ua/wp-content/uploads/2020/02/fortnite-top-secret.jpg?fit=2000%2C1114&amp;quality=100&amp;strip=all&amp;ssl=1', icon: 'https://i0.wp.com/itc.ua/wp-content/uploads/2020/02/fortnite-top-secret.jpg?fit=2000%2C1114&amp;quality=100&amp;strip=all&amp;ssl=1', slogan: 'Find Your Role'}
    ]

    const news = [
        { type: 'video', img: 'https://wargm.ru/images/games/bg/578080.jpg', title: 'Player Unknown\'s Battle Grounds', body: 'After 43000 hours played this is the best game ever mode!' },
        { type: 'event', img: 'https://static.cdprojektred.com/playgwent.com/news/small/playgwent.com_ru_1524748018_5ae1cef28f18e6.87688275.jpg', title: 'Tune in to the first gwent masters tournament of this season! ', body: 'GWENT Open #1 is coming to your homes this weekend, Saturday and Sunday, May 30th-31st!' },
        { type: 'video', img: 'https://wargm.ru/images/games/bg/578080.jpg', title: 'Player Unknown\'s Battle Grounds', body: 'After 43000 hours played this is the best game ever mode!' },
        { type: 'event', img: 'https://static.cdprojektred.com/playgwent.com/news/small/playgwent.com_ru_1524748018_5ae1cef28f18e6.87688275.jpg', title: 'Tune in to the first gwent masters tournament of this season! ', body: 'GWENT Open #1 is coming to your homes this weekend, Saturday and Sunday, May 30th-31st!' }
    ]

    useEffect(() => {
        if (state.user.activeChat) setBackgroundColor(state.user.activeChat.color)
        else setBackgroundColor(null)
    }, [state.user.activeChat, setBackgroundColor])

    return (
        <div className={`bd-app${(backgroundColor) ? ' ' + backgroundColor : ' default'} `}>
            <div className="bd-hub">
                <SideBar
                    state={state}
                    currentModal={currentModal}
                    setCurrentModal={setCurrentModal}
                    currentArticle={currentArticle}
                    setCurrentGame={setCurrentGame}
                    setCurrentArticle={setCurrentArticle}
                    onChooseChat={onChooseChat}
                />

                <Main
                    state={state}
                    games={games}
                    news={news}
                    currentGame={currentGame}
                    currentArticle={currentArticle}
                    setCurrentGame={setCurrentGame}
                    setCurrentArticle={setCurrentArticle}
                    onNewMessage={onNewMessage}
                />
                
                <SideFeed
                    state={state}
                    onChooseChat={onChooseChat}
                />
                
                <Modal
                    state={state}
                    currentModal={currentModal}
                    setCurrentModal={setCurrentModal}
                />
            </div>
        </div>
    )
}