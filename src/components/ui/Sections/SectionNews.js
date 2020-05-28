import React from 'react'

import { ArticleContent } from '../Article/ArticleContent'

export const LastNews = ({ news }) => {
    return (
        <aside className="bd-main__hotnews">
            {news.map((article, i) =>
                <ArticleContent key={i} article={article} />
            )}
        </aside>
    )
}