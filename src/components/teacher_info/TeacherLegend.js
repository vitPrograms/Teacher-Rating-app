import React from 'react'
import { useSelector } from 'react-redux'
import { selectTeacher } from '../../features/teacher/teacherSlice'

export default function TeacherLegend() {
  const teacher = useSelector(selectTeacher)
  return (
    <div className="teacher-legend">
        {renderTeacherSubjects(teacher.subjects)}
    </div>
  )
}

const renderTeacherSubjects = (subjects) => {
  if(subjects.length == 0) {
    return "Інформація відсутня"
  }

  let subjectLine = ''

  subjects.map(subject => {
    subjectLine += subject + ' / '
  })

  return subjectLine
}
