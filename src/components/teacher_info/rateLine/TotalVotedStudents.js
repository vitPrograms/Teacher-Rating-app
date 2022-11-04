import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllStudentsRates, selectTotalVoted } from '../../../features/studentsRate/studentsRateSlice'

export default function TotalVotedStudents() {
    const totalVoted = useSelector(selectTotalVoted)

  return (
    <div className="student-count">
        Кількість студентів: {totalVoted ? totalVoted : 0}
    </div>
  )
}
