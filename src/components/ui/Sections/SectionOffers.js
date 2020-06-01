import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Skeleton from 'react-skeleton-loader'
import { ChatOffers } from '../Chat/ChatOffers'
import { CommonFetchFailure } from './../Common/CommonFetchFailure'
import { GET_ALL_OFFERS } from './../../../utils/queries'

export const SectionOffers = () => {
    const { loading, error, data } = useQuery(GET_ALL_OFFERS)

    if (loading) return <Skeleton widthRandomness={0} width="100%" height="256px" />
    if (error) return <CommonFetchFailure />

    return (
        <aside className="bd-sidefeed__groupchats">
            <h2>Последние заявки</h2>
            <ChatOffers offers={data.allOffers} />
        </aside>
    )
}