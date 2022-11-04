import React from 'react'

export default function RateMark({power, value, active = false}) {
    const isSelected = active ? 'selected' : ''

  return (
    <button className={`mark rate ${power} ${isSelected}`}>
        <span className="number">
            <input hidden type={'radio'} name={'rates'} value={value} />
            {value}
        </span>
    </button>
  )
}
