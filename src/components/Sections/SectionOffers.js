import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Skeleton from 'react-skeleton-loader'
import { ChatOffers } from '../Chat/ChatOffers'
import { CommonFetchFailure } from './../Common/CommonFetchFailure'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { GET_ALL_OFFERS } from './../../utils/queries'

export const SectionOffers = ({ filter }) => {
    const { loading, error, data } = useQuery(GET_ALL_OFFERS, {
        variables: { status:  "PUBLISHED" }
    })

    if (loading) return <Skeleton widthRandomness={0} width="100%" height="256px" />
    if (error) return <CommonFetchFailure />

    return (
        <aside className="bd-sidefeed__groupchats">
            <div className="bd-title-group">
                <h2 className="bd-sectiontitle"><FontAwesomeIcon icon={faSun} />Последние заявки</h2>
            </div>
            <ChatOffers offers={(filter)
                ? data.allOffers.filter(offer => offer.hub.id === filter)
                : data.allOffers}
            />
        </aside>
    )
}