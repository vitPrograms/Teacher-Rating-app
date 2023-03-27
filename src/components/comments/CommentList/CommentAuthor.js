import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllStudents } from '../../../features/students/studentsSlice'

export default function CommentAuthor({studentId}) {
    const users = useSelector(selectAllStudents)

    const studentTag = users.find(user => user.id === studentId)
    const author = studentTag ? 'Student#' + studentTag.tag : 'Unknown'
  
    return (
        <div className="student-id">{author}</div>
    )
}
