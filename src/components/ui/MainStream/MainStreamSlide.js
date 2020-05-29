import React from 'react'

export const MainStreamSlide = ({ state, game, color, active }) => {
    return (
        <div
            className={`bd-main__mainstream-block ${color}${active ? ' active' : ''}`}
        >
            <div className="content">
                <img src={game.img} alt="Game 1" />
                <p>{game.name}<span>{game.slogan}</span></p>
            </div>
        </div>
    )
}