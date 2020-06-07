import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Skeleton from 'react-skeleton-loader'
import TinySlider from 'tiny-slider-react'
import { MainStreamSlide } from '../MainStream/MainStreamSlide'
import { CommonFetchFailure } from './../Common/CommonFetchFailure'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { GET_ALL_HUBS } from './../../utils/queries'
import carouselSettings from './../../utils/carousel'

export const SectionMainStream = () => {
    const { loading, error, data } = useQuery(GET_ALL_HUBS, {
        variables: { status:  "PUBLISHED" }
    })

    if (loading) return <Skeleton widthRandomness={0} width="100%" height="256px" />
    if (error) return <CommonFetchFailure />

    return (
        <aside className="bd-main__mainstream">
            <h2><FontAwesomeIcon icon={faFire} />Main Stream</h2>
            <TinySlider settings={carouselSettings}>
                {data.allHubs.map((hub, i) => (
                    <MainStreamSlide
                        key={i}
                        hub={hub}
                        active={(i === 0)}
                    />
                ))}
            </TinySlider>
        </aside>
    )
}