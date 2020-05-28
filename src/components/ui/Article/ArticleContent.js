import React from 'react'
import { Link } from 'react-router-dom'

export const ArticleContent = ({ article, tag="preview" }) => {
    return (
        <article className={`${article.type} ${tag}`}>
            <div className="image">
                <img src={article.img} alt="Poster" />
                {(tag !== 'full') ?
                    <Link to={`/news/${article.id}`}>
                        {(article.type === 'video') ? 'Watch' : 'Read'}
                    </Link>
                : ''}
            </div>
            <div className="text">
                <div className="body">
                    <h3>
                        {(tag === 'preview')
                            ? <Link to={`/news/${article.id}`}>{article.title}</Link>
                            : article.title
                        }
                    </h3>
                    <p>{article.body}</p>
                </div>
                <div className="tags">
                    <p className="game">Game</p>
                    <p className="date">2 hours ago</p>
                </div>
            </div>
        </article>
    )
}