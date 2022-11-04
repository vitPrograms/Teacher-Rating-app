import React from 'react'
import { useSelector } from 'react-redux'
import { selectAverageStudentsRate } from '../../features/studentsRate/studentsRateSlice'

export default function TeacherRateBlock() {
  const averageRate = useSelector(selectAverageStudentsRate)

  return (
    <div className="teacher-block-rate" title={`Точна оцінка: ${averageRate}`}>
        <div className="current-rate" >
            {Number(averageRate.toFixed(2))}/5.0
        </div>
        <div className="user-rate">
            Ваша оцінка: 4
        </div>
    </div>
  )
}
