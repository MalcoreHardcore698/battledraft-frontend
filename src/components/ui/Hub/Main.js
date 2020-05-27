import React, { useState, useRef } from 'react'

import useScrollInfo from 'react-element-scroll-hook'

import TinySlider from 'tiny-slider-react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export const MessageChat = ({ message, userId }) => {
    return (
        <li className={`message ${(message.userId === userId) ? ' my' : ''}`}>
            <img src={message.avatar} alt="Avatar" />
            <p>{message.content}</p>
        </li>
    )
}

export const ActiveChat = ({ chat, userId, onNewMessage }) => {
    const inputRef = useRef(null)
    const [message, setMessage] = useState(null)

    const handlerSubmit = (e) => {
        e.preventDefault()
        if (message) {
            onNewMessage(userId, chat.id, message)
            setMessage(null)
            inputRef.current.value = ''
            inputRef.current.focus()
        }
    }

    const handlerEnterPress = (e) => {
        if(e.keyCode === 13) {
            handlerSubmit(e)
        }
    }

    const handlerTyping = (e) => {
        setMessage(e.target.value)
    }
    
    return (
        <div className="messages">
            {(!chat || chat.messages.length === 0) ?
                <p className="history no-messages">No Messages</p> :
                <ul className="history">
                    {(chat.messages.map((message, i) =>
                        <MessageChat key={i} message={message} userId={userId} />
                    ))}
                </ul>
            }

            <form className="form">
                <button onClick={(e) => e.preventDefault()}><FontAwesomeIcon icon={faPaperclip}/></button>
                <input
                    ref={inputRef}
                    type="textarea"
                    placeholder="Type a message"
                    defaultValue={message}
                    onChange={handlerTyping}
                    onKeyDown={handlerEnterPress}
                    tabIndex={0}
                    autoFocus={true}
                />
                <button onClick={handlerSubmit}><FontAwesomeIcon icon={faPaperPlane}/></button>
            </form>
        </div>
    )
}

export const MainStreamBlock = ({ game, color, setCurrentGame }) => {
    return (
        <div
            className={`bd-main__mainstream-block ${color}`}
            onClick={() => setCurrentGame(game)}
        >
            <div className="content">
                <img src={game.img} alt="Game 1" />
                <p>{game.name}<span>{game.slogan}</span></p>
            </div>
        </div>
    )
}

export const MainStream = ({ games, setCurrentGame }) => {
    const colors = ['blue', 'orange', 'red', 'purple']
    const settings = {
        nav: false,
        mouseDrag: true,
        controls: false,
        items: 3,
        gutter: 25,
        edgePadding: 50,
        loop: false
    }

    return (
        <aside className="bd-main__mainstream">
            <TinySlider settings={settings}>
                {games.map((game, i) => (
                    <MainStreamBlock
                        key={i}
                        game={game}
                        color={colors[i]}
                        setCurrentGame={setCurrentGame}
                    />
                ))}
            </TinySlider>
        </aside>
    )
}

export const Article = ({ content, tag="preview", setCurrentArticle }) => {
    const handlerArticle = (e) => {
        e.preventDefault()
        setCurrentArticle(content)
    }

    return (
        <article className={`${content.type} ${tag}`}>
            <div className="image">
                <img src={content.img} alt="Poster" />
                <button onClick={handlerArticle}>{(content.type === 'video') ? 'Watch' : 'Read'}</button>
            </div>
            <div className="text">
                <div className="body">
                    <h3 onClick={(tag !== 'full' && handlerArticle)}>{content.title}</h3>
                    <p>{content.body}</p>
                </div>
                <div className="tags">
                    <p className="game">Game</p>
                    <p className="date">2 hours ago</p>
                </div>
            </div>
        </article>
    )
}

export const News = ({ news, setCurrentArticle }) => {
    return (
        <aside className="bd-main__hotnews">
            {news.map((content, i) =>
                <Article key={i} content={content} setCurrentArticle={setCurrentArticle} />
            )}
        </aside>
    )
}

export const Offer = ({ offer }) => {
    return (
        <li>
            <div className="title">
                <img src="https://vignette.wikia.nocookie.net/gwent/images/7/75/CirALt.png/revision/latest?cb=20170830181650" alt="Player" />
                <h5>{offer.nickname}</h5>
            </div>
            <div className="message">
                <p>{offer.message}</p>
            </div>
        </li>
    )
}

export const Offers = ({ offers }) => {
    return (
        <ul className="offers">
            {offers.map((offer, i) => <Offer key={i} offer={offer} />)}
        </ul>
    )
}

export const Main = ({
    state,
    games,
    news,
    currentGame,
    currentArticle,
    setCurrentGame,
    setCurrentArticle,
    onNewMessage
}) => {
    const [scrollInfo, setRef] = useScrollInfo()
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

    const handlerArticle = (e) => {
        e.preventDefault()
        setCurrentArticle(null)
    }

    return (
        <section ref={setRef} className={`bd-main${(scrollInfo.y.value > 300) ? ' offset' : ''}`}>
            {(state.user.activeChat) ?
                <ActiveChat
                    chat={state.user.chats.find(chat => chat.id === state.user.activeChat.id)}
                    userId={state.user.id}
                    onNewMessage={onNewMessage}
                />
            : ''}

            {(currentArticle &&
                <React.Fragment>
                    <div className="bd-headers">
                        <h2 className="bd-title">News</h2>
                        <button onClick={handlerArticle}>Back</button>
                    </div>
                    <Article content={currentArticle} tag="full" />
                </React.Fragment>
            )}

            {(!state.user.activeChat && !currentArticle &&
                <MainStream games={games} setCurrentGame={setCurrentGame} />
            )}
            {
                (!state.user.activeChat && !currentArticle && !currentGame) ?
                    <News news={news} setCurrentArticle={setCurrentArticle} /> :
                (!state.user.activeChat && !currentArticle) ?
                    <Offers offers={offers} /> : ''
            }
        </section>
    )
}