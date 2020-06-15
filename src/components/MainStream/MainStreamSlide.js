import React from 'react'
import { Link } from 'react-router-dom'
import { config } from './../../utils/config'

const api = config.get('api')

export const MainStreamSlide = ({ hub, active }) => {
    return (
        <Link
            to={`/hubs/${hub.id}`}
            className={`bd-hubblock slide${active ? ' active' : ''}`}
        >
            <div className="content">
                <img src={`${api}${hub.poster.path.replace('./', '/')}`} alt="Game 1" />
                <p style={{ background: hub.color || 'gray' }}>{hub.title}<span>{hub.slogan}</span></p>
            </div>
        </Link>
    )
}