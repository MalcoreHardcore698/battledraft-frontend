import React, { useState, useEffect } from 'react'

import { PanelMain } from './../Panels/PanelMain'
import { PanelSideBar } from './../Panels/PanelSideBar'
import { CommonModal } from './../Common/CommonModal'

export const PageHub = ({ state, onChooseChat, onCloseChat, onOpenChat, onNewMessage }) => {
    const [currentModal, setCurrentModal] = useState(null)
    const [backgroundColor, setBackgroundColor] = useState(null)

    const games = [
        { id: 0, name: 'League of Legend', img: 'https://estnn.com/wp-content/uploads/2020/01/league-of-legends-header-x-1024x576.jpg', slogan: 'Find Your Role'},
        { id: 1, name: 'Fortnite', img: 'https://i0.wp.com/itc.ua/wp-content/uploads/2020/02/fortnite-top-secret.jpg?fit=2000%2C1114&amp;quality=100&amp;strip=all&amp;ssl=1', icon: 'https://i0.wp.com/itc.ua/wp-content/uploads/2020/02/fortnite-top-secret.jpg?fit=2000%2C1114&amp;quality=100&amp;strip=all&amp;ssl=1', slogan: 'Find Your Role'},
        { id: 2, name: 'Gwent', img: 'https://static.cdprojektred.com/playgwent.com/news/big/playgwent.com_en_1585735384_5e8466d93ab410.52444085.jpg', slogan: 'Find Your Role'},
        { id: 3, name: 'Dota 2', img: 'https://steamcdn-a.akamaihd.net/steam/apps/570/header.jpg?t=1543590720', slogan: 'Find Your Role'}
    ]

    const news = [
        { id: 0, type: 'video', img: 'https://wargm.ru/images/games/bg/578080.jpg', title: 'Player Unknown\'s Battle Grounds', body: 'After 43000 hours played this is the best game ever mode!' },
        { id: 1, type: 'event', img: 'https://static.cdprojektred.com/playgwent.com/news/small/playgwent.com_ru_1524748018_5ae1cef28f18e6.87688275.jpg', title: 'Tune in to the first gwent masters tournament of this season! ', body: 'GWENT Open #1 is coming to your homes this weekend, Saturday and Sunday, May 30th-31st!' },
        { id: 2, type: 'video', img: 'https://wargm.ru/images/games/bg/578080.jpg', title: 'Player Unknown\'s Battle Grounds', body: 'After 43000 hours played this is the best game ever mode!' },
        { id: 3, type: 'event', img: 'https://static.cdprojektred.com/playgwent.com/news/small/playgwent.com_ru_1524748018_5ae1cef28f18e6.87688275.jpg', title: 'Tune in to the first gwent masters tournament of this season! ', body: 'GWENT Open #1 is coming to your homes this weekend, Saturday and Sunday, May 30th-31st!' }
    ]

    const offers = [
        { avatar: '', nickname: 'Malcore', message: 'I have passed the golden age of this game and it\'s only downhil' },
        { avatar: '', nickname: 'Qewub', message: 'I have passed the golden age of this game and it\'s only downhil' },
        { avatar: '', nickname: 'Malcore', message: 'I have passed the golden age of this game and it\'s only downhil' },
        { avatar: '', nickname: 'Malcore', message: 'I have passed the golden age of this game and it\'s only downhil' },
        { avatar: '', nickname: 'Qewub', message: 'I have passed the golden age of this game and it\'s only downhil' },
        { avatar: '', nickname: 'Malcore', message: 'I have passed the golden age of this game and it\'s only downhil' },
        { avatar: '', nickname: 'Malcore', message: 'I have passed the golden age of this game and it\'s only downhil' },
        { avatar: '', nickname: 'Qewub', message: 'I have passed the golden age of this game and it\'s only downhil' },
        { avatar: '', nickname: 'Malcore', message: 'I have passed the golden age of this game and it\'s only downhil' },
        { avatar: '', nickname: 'Qewub', message: 'I have passed the golden age of this game and it\'s only downhil' }
    ]

    useEffect(() => {
        if (state.user.activeChat) setBackgroundColor(state.user.activeChat.color)
        else setBackgroundColor(null)
    }, [state.user.activeChat, setBackgroundColor])

    return (
        <div className={`bd-app${(backgroundColor) ? ' ' + backgroundColor : ' default'} `}>
            <div className="bd-hub">
                <PanelSideBar
                    state={state}
                    currentModal={currentModal}
                    setCurrentModal={setCurrentModal}
                    onChooseChat={onChooseChat}
                    onCloseChat={onCloseChat}
                    onOpenChat={onOpenChat}
                />
                
                <PanelMain
                    state={state}
                    games={games}
                    news={news}
                    offers={offers}
                    onNewMessage={onNewMessage}
                />
                
                <CommonModal
                    state={state}
                    currentModal={currentModal}
                    setCurrentModal={setCurrentModal}
                />
            </div>
        </div>
    )
}