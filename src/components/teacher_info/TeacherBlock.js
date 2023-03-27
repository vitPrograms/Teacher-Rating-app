import React from 'react'
import TeacherInfo from './TeacherInfo'
import TeacherRewards from './TeacherRewards'

import './teacher.scss'

export default function TeacherBlock() {

  return (
    <div className="teacher-block">
        <TeacherRewards />
        <TeacherInfo />
    </div>
  )
}
