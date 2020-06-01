import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Skeleton from 'react-skeleton-loader'
import { CommonFetchFailure } from './../Common/CommonFetchFailure'
import { GET_ALL_USER_NOTIFICATIONS } from './../../../utils/queries'

import { ChatGroup } from '../Chat/ChatGroup'

export const SectionPopularHub = ({ onOpenChat }) => {
    const { loading, error, data } = useQuery(GET_ALL_USER_NOTIFICATIONS)

    if (loading) return <Skeleton widthRandomness={0} width="100%" height="256px" />
    if (error) return <CommonFetchFailure />

    return (
        <aside className="bd-sidefeed__popular">
            <h2>Популярное сообщество</h2>
            <ChatGroup
                chat={data.getPopularHubChat}
                onOpenChat={onOpenChat}
            />
        </aside>
    )
}