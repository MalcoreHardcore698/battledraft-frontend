import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { SectionHome } from './../Sections/SectionHome'
import { SectionProfile } from './../Sections/SectionProfile'
import { SectionNavigator } from './../Sections/SectionNavigator'
import { SectionTournaments } from './../Sections/SectionTournaments'
import { SectionArticle } from './../Sections/SectionArticle'
import { SectionOffer } from './../Sections/SectionOffer'
import { SectionChat } from './../Sections/SectionChat'

export const PanelMain = ({ state, news, offers, onChooseChat, onOpenChat, onNewMessage }) => {
    return (
        <section className="bd-main">
            <Switch>
                <Route exact path="/">
                    <SectionHome state={state} news={news} />
                </Route>
                
                <Route path="/profile">
                    <SectionProfile state={state} />
                </Route>

                <Route path="/navigator">
                    <SectionNavigator state={state} onChooseChat={onChooseChat} onOpenChat={onOpenChat} />
                </Route>
                
                <Route path="/tournaments">
                    <SectionTournaments state={state} onChooseChat={onChooseChat} onOpenChat={onOpenChat} />
                </Route>

                <Route path="/news/:newsId">
                    <SectionArticle news={news} />
                </Route>

                <Route path="/chats/:chatId">
                    <SectionChat state={state} onNewMessage={onNewMessage} />
                </Route>

                <Route path="/offers/:gameName">
                    <SectionOffer offers={offers} />
                </Route>
            </Switch>
        </section>
    )
}