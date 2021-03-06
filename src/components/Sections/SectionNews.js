import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Skeleton from 'react-skeleton-loader'
import { ArticleContent } from '../Article/ArticleContent'
import { CommonFetchFailure } from './../Common/CommonFetchFailure'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDove } from '@fortawesome/free-solid-svg-icons'
import { GET_ALL_NEWS } from './../../utils/queries'

export const SectionNews = () => {
    const { loading, error, data } = useQuery(GET_ALL_NEWS, {
        variables: { status:  "PUBLISHED" }
    })

    if (loading) return <Skeleton widthRandomness={0} width="100%" height="256px" />
    if (error) return <CommonFetchFailure />

    return (
        <aside className="bd-main__hotnews">
            <div className="bd-title-group">
                <h2 className="bd-sectiontitle"><FontAwesomeIcon icon={faDove} />News</h2>
            </div>
            {data.allNews.map((article, i) =>
                <ArticleContent key={i} article={article} />
            )}
        </aside>
    )
}