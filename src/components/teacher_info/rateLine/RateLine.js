import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVote, selectAllStudentsRates } from '../../../features/studentsRate/studentsRateSlice'
import Rate from './Rate'
import { powers } from '../../comments/powers.js'

export default function RateLine() {
    let studentsRate = useSelector(selectAllStudentsRates)
    const dispatch = useDispatch()
    
    const renderedRates = () => {
        const rates = []
        studentsRate = [...studentsRate]

        studentsRate.sort((a, b) => a.rate - b.rate)

        studentsRate.map(el => {
            rates.push(<Rate key={el.rate} rate={el.rate} voted={el.voted} power={powers[el.rate]}/>)
        })
        return rates;
    }

    const rateNow = rateN => {
      dispatch(addVote(rateN))
    }

  return (
    <>
    <div className="rate-line">
        { renderedRates() }
    </div>

    <button onClick={e => rateNow(1)}>[Rate 1]</button>
    <button onClick={e => rateNow(2)}>[Rate 2]</button>
    <button onClick={e => rateNow(3)}>[Rate 3]</button>
    <button onClick={e => rateNow(4)}>[Rate 4]</button>
    <button onClick={e => rateNow(5)}>[Rate 5]</button>
    </>
  )
}
