import React from 'react'

export const MainStreamSlide = ({ hub, active }) => {
    console.log(hub)
    return (
        <div
            className={`bd-main__mainstream-block slide${active ? ' active' : ''}`}
        >
            <div className="content">
                <img src={hub.poster} alt="Game 1" />
                <p style={{ background: hub.color || 'gray' }}>{hub.title}<span>{hub.slogan}</span></p>
            </div>
        </div>
    )
}