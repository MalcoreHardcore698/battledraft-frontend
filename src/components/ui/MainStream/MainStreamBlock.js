import React from 'react'

export const MainStreamBlock = ({ game, color }) => {
    return (
        <div className={`bd-main__mainstream-block ${color}`}>
            <div className="content">
                <img src={game.img} alt="Game 1" />
                <p>{game.name}<span>{game.slogan}</span></p>
            </div>
        </div>
    )
}