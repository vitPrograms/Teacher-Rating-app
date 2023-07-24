import React from 'react'
import { useSelector } from 'react-redux'
import { selectRate } from '../../features/rate/rateSlice'
import { powers } from '../comments/powers'
import { selectAverageRate } from '../../features/teacher/teacherSlice'

export default function TeacherRateBlock() {
  const averageRate = useSelector(selectAverageRate)
  const studentRate = useSelector(selectRate)

  const shortNumber = Number(averageRate.toFixed(2))
  const rateColor = powers[Math.round(shortNumber)]

  return (
    <div className="teacher-block-rate">
        <div className={`current-rate ${rateColor} unselectable`} title={`Точна оцінка: ${averageRate}`} >
            {shortNumber}/5.0
        </div>
        <div className="user-rate unselectable" title={`Дата оцінки: ${new Date()}`}>
            Ваша оцінка: {studentRate}
        </div>
    </div>
  )
}
