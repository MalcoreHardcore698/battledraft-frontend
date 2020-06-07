import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Skeleton from 'react-skeleton-loader'
import { CommonFetchFailure } from './../Common/CommonFetchFailure'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { ArticleContent } from './ArticleContent'
import { GET_NEWS } from './../../utils/queries'

export const ArticleOne = () => {
    const { newsId } = useParams()
    const { loading, error, data } = useQuery(GET_NEWS, {
        variables: { id: newsId }
    })

    if (loading) return <Skeleton widthRandomness={0} width="100%" height="256px" />
    if (error) return <CommonFetchFailure />
    
    return (
        <React.Fragment>
            <div className="bd-title-group">
                <h2><FontAwesomeIcon icon={faWallet} />Новости</h2>
                <Link to="/" className="bd-action">Back</Link>
            </div>

            <ArticleContent article={data.getNews} tag="full" />

            <div className="bd-title-group">
                <div className="empty"></div>
                <Link to="/" className="bd-action">Back</Link>
            </div>
        </React.Fragment>
    )
}