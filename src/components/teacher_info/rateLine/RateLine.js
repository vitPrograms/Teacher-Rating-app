import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Rate from './Rate'
import { powers } from '../../comments/powers.js'
import { selectAllStudentRates } from '../../../features/teacher/teacherSlice'

export default function RateLine() {
    let studentsRate = useSelector(selectAllStudentRates)
    const dispatch = useDispatch()
    
    const renderedRates = () => {
        const rates = []

        studentsRate.sort((a, b) => a.rate - b.rate)

        studentsRate.map(el => {
            rates.push(<Rate key={el.rate} rate={el.rate} voted={el.voted} power={powers[el.rate]}/>)
        })
        return rates;
    }

  return (
    <>
    <div className="rate-line">
        { renderedRates() }
    </div>
    </>
  )
}
