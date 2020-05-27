import React from 'react'

export const MessageChat = ({ message }) => {
    return (
        <li>
            <img src={message.avatar} alt="Avatar" />
            <p>{message.content}</p>
        </li>
    )
}

export const ActiveChat = ({ chat }) => {
    return (
        <ul>
            {(chat && chat.messages.map((message, i) =>
                <MessageChat key={i} message={message} />
            ))}
        </ul>
    )
}

export const MainStreamBlock = ({ data, color }) => {
    return (
        <div className={`bd-main__mainstream-block ${color}`}>
            <div className="content">
                <img src={data.img} alt="Game 1" />
                <p>{data.name}<span>{data.slogan}</span></p>
            </div>
            <div className="headcrumb">
                <img src={data.icon} alt="Icon 1" />
            </div>
        </div>
    )
}

export const MainStream = ({ data }) => {
    const colors = ['blue', 'orange', 'red', 'purple']
    return (
        <aside className="bd-main__mainstream">
            {data.map((item, i) => (
                <MainStreamBlock key={i} data={item} color={colors[i]} />
            ))}
        </aside>
    )
}

export const Article = ({ type, content }) => {
    return (
        <article className={type}>
            <p>{content}</p>
        </article>
    )
}

export const News = () => {
    return (
        <aside className="bd-main__hotnews">
            <Article type="video" content="Create prototypes on the web with your team. Collaborate live, thread feedback, share projects, and hand off animations." />
            <Article type="event" content="Create prototypes on the web with your team. Collaborate live, thread feedback, share projects, and hand off animations." />
        </aside>
    )
}

export const Main = ({ state }) => {
    const games = [
        { name: 'League of Legend', img: 'https://i0.wp.com/itc.ua/wp-content/uploads/2020/02/fortnite-top-secret.jpg?fit=2000%2C1114&amp;quality=100&amp;strip=all&amp;ssl=1', icon: 'https://i0.wp.com/itc.ua/wp-content/uploads/2020/02/fortnite-top-secret.jpg?fit=2000%2C1114&amp;quality=100&amp;strip=all&amp;ssl=1', slogan: 'Find Your Role'},
        { name: 'Fortnite', img: 'https://i0.wp.com/itc.ua/wp-content/uploads/2020/02/fortnite-top-secret.jpg?fit=2000%2C1114&amp;quality=100&amp;strip=all&amp;ssl=1', icon: 'https://i0.wp.com/itc.ua/wp-content/uploads/2020/02/fortnite-top-secret.jpg?fit=2000%2C1114&amp;quality=100&amp;strip=all&amp;ssl=1', slogan: 'Find Your Role'},
        { name: 'Gwent', img: 'https://i0.wp.com/itc.ua/wp-content/uploads/2020/02/fortnite-top-secret.jpg?fit=2000%2C1114&amp;quality=100&amp;strip=all&amp;ssl=1', icon: 'https://i0.wp.com/itc.ua/wp-content/uploads/2020/02/fortnite-top-secret.jpg?fit=2000%2C1114&amp;quality=100&amp;strip=all&amp;ssl=1', slogan: 'Find Your Role'},
        { name: 'Dota 2', img: 'https://i0.wp.com/itc.ua/wp-content/uploads/2020/02/fortnite-top-secret.jpg?fit=2000%2C1114&amp;quality=100&amp;strip=all&amp;ssl=1', icon: 'https://i0.wp.com/itc.ua/wp-content/uploads/2020/02/fortnite-top-secret.jpg?fit=2000%2C1114&amp;quality=100&amp;strip=all&amp;ssl=1', slogan: 'Find Your Role'}
    ]
    return (
        <section className="bd-main">
            {(state.user.activeChat && <ActiveChat activeChat={state.user.activeChat} />)}
            {(!state.user.activeChat && <MainStream data={games} />)}
            {(!state.user.activeChat && <News />)}
        </section>
    )
}