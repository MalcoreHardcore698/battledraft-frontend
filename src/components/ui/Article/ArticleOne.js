import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { ArticleContent } from './ArticleContent'

export const ArticleOne = ({ news }) => {
    const { newsId } = useParams()
    const article = (news) ? news.find(articleOne => articleOne.id === +newsId) : false
    
    return (
        <React.Fragment>
            <div className="bd-headers">
                <h2 className="bd-title">News</h2>
                <Link to="/">Back</Link>
            </div>

            <ArticleContent article={article} tag="full" />

            <div className="bd-headers">
                <div className="empty"></div>
                <Link to="/">Back</Link>
            </div>
        </React.Fragment>
    )
}