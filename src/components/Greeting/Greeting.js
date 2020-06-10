import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { GreetingRoutes } from './GreetingRoutes'
import { CommonButton } from '../Common/CommonButton'
import { closeModal } from './../../utils/actions'

export const Greeting = () => {
    const dispatch = useDispatch()
    const [step, setStep] = useState(1)

    const handlerNextStep = (e, step) => {
        e.preventDefault()
        setStep(step)
    }

    const handlerStart = (e) => {
        e.preventDefault()
        dispatch(closeModal())
    }

    return (
        <div key={step} className="bd-greteeng">
            <GreetingRoutes step={step} />
            <CommonButton text="Далее" handler={(e) => (step > 3) ? handlerStart(e) : handlerNextStep(e, step + 1)} />
        </div>
    )
}