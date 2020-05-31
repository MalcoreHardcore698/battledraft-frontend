import React from 'react'

export const MainStreamSlide = ({ state, game, active }) => {
    return (
        <div
            className={`bd-main__mainstream-block slide ${game.color}${active ? ' active' : ''}`}
        >
            <div className="content">
                <img src={game.img} alt="Game 1" />
                <p>{game.title}<span>{game.slogan}</span></p>
            </div>
        </div>
    )
}