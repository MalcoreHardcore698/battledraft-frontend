import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { SectionHome } from './../Sections/SectionHome'
import { ArticleOne } from './../Article/ArticleOne'
import { UserOffers } from './../User/UserOffers'
import { SectionChat } from './../Sections/SectionChat'
import { SectionNavigator } from './../Sections/SectionNavigator'

export const PanelMain = ({ state, news, offers, onChooseChat, onOpenChat, onNewMessage }) => {
    return (
        <section className="bd-main">
            <Switch>
                <Route exact path="/">
                    <SectionHome state={state} news={news} />
                </Route>

                <Route path="/news/:newsId">
                    <ArticleOne news={news} />
                </Route>

                <Route path="/chats/:chatId">
                    <SectionChat state={state} onNewMessage={onNewMessage} />
                </Route>

                <Route path="/offers/:gameName">
                    <UserOffers offers={offers} />
                </Route>

                <Route path="/navigator">
                    <SectionNavigator state={state} onChooseChat={onChooseChat} onOpenChat={onOpenChat} />
                </Route>

                <Redirect to="/" />
            </Switch>
        </section>
    )
}