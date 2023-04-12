import React from 'react'
import { useSelector } from 'react-redux'
import { selectTeacher } from '../../features/teacher/teacherSlice'

export default function TeacherName() {
  const teacher = useSelector(selectTeacher)
  return (
    <div className="teacher-name">
        {teacher.fullname}
    </div>
  )
}
