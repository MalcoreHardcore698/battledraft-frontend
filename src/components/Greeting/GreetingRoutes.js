import React from 'react'
import { GreetingPreferences } from './GreetingPreferences'

export const GreetingRoutes = ({ step }) => {
    switch (step) {
        case 1:
            return <p>Добро пожаловать!</p>
        case 2:
            return <p>Выберите аватар</p>
        case 3:
            return <GreetingPreferences />
        case 4:
            return <p>Удачи на полях сражений!</p>
        default:
            throw new Error('Current step doesn\'t exists')
    }
}