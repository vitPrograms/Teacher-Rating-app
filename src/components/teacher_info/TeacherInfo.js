import React from 'react'
import { useSelector } from 'react-redux'
import { selectVotedStatus } from '../../features/votedStatus/votedStatusSlice'
import TeacherNameBlock from './TeacherNameBlock'
import TeacherRateBlock from './TeacherRateBlock'

export default function TeacherInfo() {
  const isVoted = useSelector(selectVotedStatus)
  
  return (
    <div className="teacher-info">
        <TeacherNameBlock />
        {isVoted ? <TeacherRateBlock /> : null}
    </div>
  )
}
