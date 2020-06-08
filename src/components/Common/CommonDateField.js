import React from 'react'
import DatePicker from 'react-datepicker'

export const CommonDateField = ({ name, label, date, setDate }) => {
    const handlerDate = (e) => {
        setDate(e)
    }

    return (
        <div className="bda-inputfield">
            <label htmlFor={name}>{label}</label>
            
            <DatePicker
                selected={date}
                showTimeSelect
                dateFormat="Pp"
                onChange={handlerDate}
            />
        </div>
    )
}