import React from 'react'
import { useSelector } from 'react-redux'
import { selectTotalVoted } from '../../../features/teacher/teacherSlice'

export default function TotalVotedStudents() {
    const totalVoted = useSelector(selectTotalVoted)

  return (
    <div className="student-count">
        Кількість оцінок: {totalVoted ? totalVoted : 0}
    </div>
  )
}
