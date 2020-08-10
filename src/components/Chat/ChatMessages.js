import React, { useState, useEffect, useRef } from 'react'
import { useSubscription } from '@apollo/react-hooks'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { ChatMessagesContent } from './ChatMessagesContent'
import { CommonMutationButton } from '../Common/CommonMutationButton'
import { ADD_MESSAGE, ADD_MESSAGE_SUBSCRIPTION } from './../../utils/queries'

export const ChatMessages = ({ chat }) => {
    const state = useSelector(state => state)

    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState(null)

    const { data, loading } = useSubscription(ADD_MESSAGE_SUBSCRIPTION, {
        variables: { chat: chat.id }
    })

    const inputRef = useRef(null)

    const handlerSubmit = () => {
        if (message) {
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
        if (!loading && data) {
            setMessages(data.messages)
        } else {
            setMessages(chat.messages)
        }
    }, [loading, data, chat.messages])

    return (
        <div className="bd-messages">
            <h2><FontAwesomeIcon icon={faComment} />{(chat) ? chat.title : ''}</h2>
        
            <div className="bd-messages__chat">
                {((chat && chat.messages.length > 0) || messages.length > 0)
                    ? <ChatMessagesContent messages={messages} userId={state.user.id} />
                    : <p className="history no-messages">No Messages</p> 
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

                    <CommonMutationButton options={{
                        text: <FontAwesomeIcon icon={faPaperPlane}/>,
                        mutation: ADD_MESSAGE,
                        variables: {
                            chat: chat.id,
                            sender: state.user.id,
                            receiver: chat.members.find(m => m.id !== state.user.id).id,
                            message: message
                        },
                        handler: () => {
                            handlerSubmit()
                        }
                    }} />
                </form>
            </div>
        </div>
    )
}