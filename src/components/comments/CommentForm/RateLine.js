import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { powers } from '../powers'
import RateMark from './RateMark'
import { setFormRate } from '../../../features/rate/formRateSlice'

export default function RateLine() {
    const [lastRate, setLastRate] = useState(0)
    const dispatch = useDispatch()
    const marks = []

    const renderRateMarks = () => {
        for(let [key, value] of Object.entries(powers)) {
            const isActive = lastRate === key ? true : false
            marks.push(<RateMark key={key} power={value} value={key} active={isActive} />)
        }
        return marks
    } 

    const changeRate = e => {
        const radioBtn = e.target.querySelector('input')
        const value = Number (radioBtn.value)
        if(radioBtn.value === lastRate) return
        
        setLastRate(value)
        dispatch(setFormRate(value))
        radioBtn.checked = true
    }

  return (
    <div className="rate-line select" onClick={changeRate}>
        {renderRateMarks()}
    </div>
  )
}
