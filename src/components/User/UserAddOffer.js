import React from 'react'
import { CommonInputField } from './../Common/CommonInputField'
import { CommonTextareaField } from './../Common/CommonTextareaField'
import { CommonSelectField } from './../Common/CommonSelectField'
import { CommonButton } from './../Common/CommonButton'

export const UserAddOffer = ({ hubs }) => {
    return (
        <React.Fragment>
            <CommonInputField
                name="title"
                label="Название"
            />

            <CommonTextareaField
                name="message"
                label="Сообщение"
            />

            <CommonSelectField
                name="hub"
                label="Сообщество"
                options={hubs}
            />
            <CommonButton text="Создать" />
        </React.Fragment>
    )
}