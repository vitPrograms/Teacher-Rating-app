import React from 'react'
import TeacherLegend from './TeacherLegend'
import TeacherName from './TeacherName'

export default function TeacherNameBlock() {
  return (
    <div className="teacher-block-name">
        <TeacherName />
        <TeacherLegend />
    </div>
  )
}
