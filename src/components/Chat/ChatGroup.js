import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Skeleton from 'react-skeleton-loader'
import { CommonFetchFailure } from './../Common/CommonFetchFailure'
import { GET_POPULAR_HUB_CHAT } from './../../../utils/queries'
import { Link } from 'react-router-dom'

import { ChatOffers } from './ChatOffers'

export const ChatGroup = ({ chat, onOpenChat }) => {
    const { loading, error, data } = useQuery(GET_POPULAR_HUB_CHAT)

    const handlerChat = () => {
        onOpenChat(chat.id)
    }

    if (loading) return <Skeleton widthRandomness={0} width="100%" height="256px" />
    if (error) return <CommonFetchFailure />

    return (
        <div className="block">
            <Link to={`/chats/${chat.id}`}  onClick={handlerChat}>
                <div className="title">
                    <img src={chat.icon} alt="Icon Game" />
                    <ul>
                        {(chat.members) ? chat.members.map(member =>
                            <li><img src={member.avatar} alt={`${member.name}`} /></li>
                        ) : ''}
                        <li className="bd-clearfix">{chat.members.length}</li>
                    </ul>
                </div>
                <div className="description">
                    <h3>{chat.title}</h3>
                    <p>Strategic Battle Royal</p>
                </div>
            </Link>

            <ChatOffers offers={data.offers} />
        </div>
    )
}