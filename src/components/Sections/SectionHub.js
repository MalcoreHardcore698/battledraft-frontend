import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useParams } from 'react-router-dom'
import Skeleton from 'react-skeleton-loader'
import { ChatOffers } from '../Chat/ChatOffers'
import { CommonFetchFailure } from './../Common/CommonFetchFailure'
import { GET_HUB } from './../../utils/queries'
import { config } from './../../utils/config'

const api = config.get('api')

export const SectionHub = () => {
    const { hubId } = useParams()
    const { loading, error, data } = useQuery(GET_HUB, {
        variables: { id: hubId }
    })

    if (loading) return <Skeleton widthRandomness={0} width="100%" height="256px" />
    if (error) return <CommonFetchFailure />

    return (
        <aside className="bd-main__hub">
            <div className="bd-hubblock active">
                <div className="content">
                    <img src={`${api}${data.getHub.poster.path.replace('./', '/')}`} alt="hub 1" />
                    <p style={{ background: data.getHub.color || 'gray' }}>{data.getHub.title}<span>{data.getHub.slogan}</span></p>
                </div>
            </div>
            <ChatOffers offers={data.getHub.offers} />
        </aside>
    )
}