import React from 'react'
import RateButton from './RateButton'
import { powers } from '../powers'
import { useSelector } from 'react-redux'
import { selectFormRate } from '../../../features/rate/formRateSlice'

export default function RateButtonsLine() {
    const rate = useSelector(selectFormRate)
    const buttons = []

    const renderRateButtons = () => {
        for(let [key, value] of Object.entries(powers)) {
            const isActive = rate == key ? true : false
            buttons.push(<RateButton key={key} power={value} active={isActive} />)
        }
        return buttons
    }

  return (
    <div className="rate-button-block">
        {renderRateButtons()}
    </div>
  )
}
