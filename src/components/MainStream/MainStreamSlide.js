import React from 'react'
import { Link } from 'react-router-dom'

export const MainStreamSlide = ({ hub, active }) => {
    return (
        <Link
            to={`/hubs/${hub.id}`}
            className={`bd-hubblock slide${active ? ' active' : ''}`}
        >
            <div className="content">
                <img src={hub.poster} alt="Game 1" />
                <p style={{ background: hub.color || 'gray' }}>{hub.title}<span>{hub.slogan}</span></p>
            </div>
        </Link>
    )
}