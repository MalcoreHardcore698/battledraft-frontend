import React from 'react'
import { PanelMain } from './../Panels/PanelMain'
import { PanelSideBar } from './../Panels/PanelSideBar'
import { PanelSideFeed } from './../Panels/PanelSideFeed'
import { CommonModal } from './../Common/CommonModal'

export const PageHub = ({
    setAuthenticated,
    onChooseChat,
    onCloseChat,
    onOpenChat,
    onAddMember,
    onNewMessage
}) => {
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

    return (
        <div className="bd-app">
            <div className="bd-hub">
                <PanelSideBar
                    onChooseChat={onChooseChat}
                    onCloseChat={onCloseChat}
                    onOpenChat={onOpenChat}
                />
                
                <PanelMain
                    news={news}
                    offers={offers}
                    onChooseChat={onChooseChat}
                    onOpenChat={onOpenChat}
                    onNewMessage={onNewMessage}
                />

                <PanelSideFeed />
                
                <CommonModal
                    setAuthenticated={setAuthenticated}
                    onOpenChat={onOpenChat}
                    onAddMember={onAddMember}
                />
            </div>
        </div>
    )
}