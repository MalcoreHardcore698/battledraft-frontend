import React from 'react'
import { useDispatch } from 'react-redux'
import { config } from './../../utils/config'
import { closeModal } from './../../utils/actions'

const api = config.get('api')

export const MainStreamBlock = ({ hub }) => {
    const dispatch = useDispatch()

    const handlerOpenChat = () => {
        dispatch(closeModal())
    }

    return (
        <div className="bd-hubblock" onClick={handlerOpenChat}>
            <div className="content">
                <img src={`${api}${hub.poster.replace('./', '/')}`} alt="hub 1" />
                <p style={{ background: hub.color || 'gray' }}>{hub.title}<span>{hub.slogan}</span></p>
            </div>
        </div>
    )
}