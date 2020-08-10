import React from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { SectionHome } from './../Sections/SectionHome'
import { SectionProfile } from './../Sections/SectionProfile'
import { SectionNavigator } from './../Sections/SectionNavigator'
import { SectionTournaments } from './../Sections/SectionTournaments'
import { SectionArticle } from './../Sections/SectionArticle'
import { SectionHub } from './../Sections/SectionHub'
import { SectionChat } from './../Sections/SectionChat'

export const PanelMain = () => {
    const state = useSelector(state => state)

    return (
        <section className="bd-main">
            <Switch>
                <Route path="/" component={SectionHome} exact />
                <Route path="/profile" component={SectionProfile} exact />
                <Route path="/navigator" component={SectionNavigator} exact />
                <Route path="/tournaments" component={SectionTournaments} exact />
                <Route path="/news/:newsId" component={SectionArticle} exact />
                <Route path="/hubs/:hubId" component={SectionHub} exact />

                {(!state.user.chats || state.user.chats.length === 0)
                    ? <Redirect to="/" />
                    : <Route path="/chats/:chatId" component={SectionChat} />
                }

                <Redirect to="/" />
            </Switch>
        </section>
    )
}