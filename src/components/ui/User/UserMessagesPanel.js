import React from 'react'

import { Button } from './../Button'

export const UserMessagesPanel = () => {
    const handlerMessages = (e) => {
        e.preventDefault()
    }
    return (
        <div className="bd-block-default bd-button-messages">
            <Button text="Messages" type="message" handler={handlerMessages} />
        </div>
    )
}