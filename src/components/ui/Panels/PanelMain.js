import React from 'react'
import { Switch, Route } from 'react-router-dom'

import useScrollInfo from 'react-element-scroll-hook'

import { Home } from './../Sections/SectionHome'
import { ArticleOne } from './../Article/ArticleOne'
import { ChatMessages } from './../Chat/ChatMessages'
import { UserOffers } from './../User/UserOffers'

export const PanelMain = ({ state, games, news, offers, onNewMessage }) => {
    const [scrollInfo, setRef] = useScrollInfo()

    return (
        <section ref={setRef} className={`bd-main${(scrollInfo.y.value > 300) ? ' offset' : ''}`}>
            <Switch>
                <Route exact path="/">
                    <Home games={games} news={news} />
                </Route>

                <Route path="/news/:newsId">
                    <ArticleOne news={news} />
                </Route>

                <Route path="/chats/:chatId">
                    <ChatMessages state={state} onNewMessage={onNewMessage} />
                </Route>

                <Route path="/offers/:gameName">
                    <UserOffers offers={offers} />
                </Route>
            </Switch>
        </section>
    )
}