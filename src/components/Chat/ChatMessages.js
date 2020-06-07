import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import { ChatMessageOne } from './ChatMessageOne'

export const ChatMessages = ({ chat, onNewMessage }) => {
    const content = useSelector(state => state)
    const [message, setMessage] = useState(null)
    const historyRef = useRef(null)
    const inputRef = useRef(null)

    const handlerSubmit = (e) => {
        e.preventDefault()
        if (message) {
            onNewMessage(content.user.id, chat.id, message)
            setMessage(null)
            inputRef.current.value = ''
            inputRef.current.focus()

            const historyEl = historyRef.current
            if (historyEl) {
                historyEl.scrollTop = historyEl.scrollHeight
            }
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
        <div className="bd-messages">
            <h2><FontAwesomeIcon icon={faComment} />{(chat) ? chat.title : ''}</h2>
        
            <div className="bd-messages__chat">
                {(!chat || chat.messages.length === 0) ?
                    <p className="history no-messages">No Messages</p> :
                    <ul ref={historyRef} className="history">
                        {(chat.messages.map((message, i) =>
                            <ChatMessageOne key={i} message={message} userId={content.user.id} />
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
        </div>
    )
}