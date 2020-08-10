import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { ChatMessages } from '../Chat/ChatMessages'
import { ChatMembers } from '../Chat/ChatMembers'
import { GET_CHAT } from './../../utils/queries'
import Skeleton from 'react-skeleton-loader'

export const SectionChat = () => {
    const [chat, setChat] = useState(null)
    const { chatId } = useParams()

    const { loading, data } = useQuery(GET_CHAT, {
        variables: { id: chatId }
    })

    useEffect(() => {
        if (data) {
            const getChat = data.getChat
            console.log(getChat)
            if (getChat) {
                setChat({
                    id: getChat.id,
                    title: getChat.title,
                    members: getChat.participants,
                    messages: getChat.messages
                })
            }
        }
    }, [data])

    if (loading || !chat) return <Skeleton widthRandomness={0} width="100%" height="100%" />

    return (
        <div className="bd-chat">
            <ChatMessages chat={chat} />
            <ChatMembers chat={chat} />
        </div>
    )
}