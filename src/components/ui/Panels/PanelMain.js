import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { SectionHome } from './../Sections/SectionHome'
import { SectionProfile } from './../Sections/SectionProfile'
import { SectionNavigator } from './../Sections/SectionNavigator'
import { SectionTournaments } from './../Sections/SectionTournaments'
import { SectionArticle } from './../Sections/SectionArticle'
import { SectionOffer } from './../Sections/SectionOffer'
import { SectionChat } from './../Sections/SectionChat'

export const PanelMain = () => {
    return (
        <section className="bd-main">
            <Switch>
                <Route exact path="/" component={SectionHome} />
                <Route path="/profile" component={SectionProfile} />
                <Route path="/navigator" component={SectionNavigator} />
                <Route path="/tournaments" component={SectionTournaments} />
                <Route path="/chats/:newsId" component={SectionArticle} />
                <Route path="/chats/:chatId" component={SectionChat} />
                <Route path="/chats/:gameName" component={SectionOffer} />
            </Switch>
        </section>
    )
}