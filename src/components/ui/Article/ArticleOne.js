import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'

import { ArticleContent } from './ArticleContent'

export const ArticleOne = ({ news }) => {
    const { newsId } = useParams()
    const article = (news) ? news.find(articleOne => articleOne.id === +newsId) : false
    
    return (
        <React.Fragment>
            <div className="bd-title-group">
                <h2><FontAwesomeIcon icon={faWallet} />Новости</h2>
                <Link to="/" className="bd-action">Back</Link>
            </div>

            <ArticleContent article={article} tag="full" />

            <div className="bd-title-group">
                <div className="empty"></div>
                <Link to="/" className="bd-action">Back</Link>
            </div>
        </React.Fragment>
    )
}