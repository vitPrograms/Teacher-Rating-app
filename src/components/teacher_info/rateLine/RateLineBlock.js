import React from 'react'
import { useSelector } from 'react-redux'
import { selectVotedStatus } from '../../../features/votedStatus/votedStatusSlice'
import RateLine from './RateLine'
import TotalVotedStudents from './TotalVotedStudents'
import RateForm from '../../comments/CommentForm/RateForm'

import './rate.scss'

export default function RateLineBlock() {
  const isVoted = useSelector(selectVotedStatus)

  return (
    <>
    {
      isVoted ? (
        <>
          <div className="title">Оцінки студентів</div>
          <div className="rate-line-block">
            <RateLine />
            <TotalVotedStudents />
          </div>
        </>
      ) : (
        <>
          <div className='title'>Ваша оцінка</div>
          <div className="rate-line-block">
            <RateForm />
          </div>
        </>
      )
    }
    </>
  )
}
