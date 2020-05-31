import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDove } from '@fortawesome/free-solid-svg-icons'

import { ArticleContent } from '../Article/ArticleContent'

export const SectionNews = ({ news }) => {
    return (
        <aside className="bd-main__hotnews">
            <h2><FontAwesomeIcon icon={faDove} />News</h2>
            {news.map((article, i) =>
                <ArticleContent key={i} article={article} />
            )}
        </aside>
    )
}