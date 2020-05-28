import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import { ChatMessageOne } from './ChatMessageOne'

export const ChatMessages = ({ state, onNewMessage }) => {
    const [chat, setChat] = useState(null)
    const [message, setMessage] = useState(null)
    const inputRef = useRef(null)
    const { chatId } = useParams()

    const handlerSubmit = (e) => {
        e.preventDefault()
        if (message) {
            onNewMessage(state.id, chat.id, message)
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

    useEffect(() => {
        const chat = state.user.chats.find(chat => chat.id === +chatId)
        setChat(chat)
    }, [state.user.chats, chatId])
    
    return (
        <React.Fragment>
            {(!chat || chat.messages.length === 0) ?
                <p className="history no-messages">No Messages</p> :
                <ul className="history">
                    {(chat.messages.map((message, i) =>
                        <ChatMessageOne key={i} message={message} userId={state.user.id} />
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
        </React.Fragment>
    )
}