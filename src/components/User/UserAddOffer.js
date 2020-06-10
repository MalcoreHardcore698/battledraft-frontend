import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useMutation } from '@apollo/react-hooks'
import { CommonInputField } from './../Common/CommonInputField'
import { CommonTextareaField } from './../Common/CommonTextareaField'
import { CommonSelectField } from './../Common/CommonSelectField'
import { CommonButton } from './../Common/CommonButton'
import { ADD_OFFER } from './../../utils/queries'
import { closeModal } from './../../utils/actions'

export const UserAddOffer = ({ hubs }) => {
    const state = useSelector(state => state)
    const [action] = useMutation(ADD_OFFER)
    const dispatch = useDispatch()

    const form = useRef(null)

    const handlerSubmit = async (e) => {
        e.preventDefault()

        if (!form.current) return

        const title = form.current.title.value
        const message = form.current.message.value
        const hub = form.current.hub.value

        const variables = {
            title, message, user: state.user.id,
            hub, status: "PUBLISHED", dateCreated: new Date()
        }

        if (!title)
            return console.log('Введите название', 'error')
        if (!message)
            return console.log('Введите сообщение', 'error')

        if (title && message && hub) {
            await action({ variables: { ...variables } })
    
            dispatch(closeModal())
            console.log('Документ успешно создан', 'success')
        }
    }

    return (
        <form ref={form}>
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
            <CommonButton text="Создать" handler={handlerSubmit} />
        </form>
    )
}