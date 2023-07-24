import React from 'react'
import CommentAuthor from './CommentAuthor'
import CommentDate from './CommentDate'
import { powers } from '../powers'

export default function CommentRate(props) {
    const {studentId, rate, timestamp} = props
  return (
    <div className="comment-rate-info">
        <CommentAuthor studentId={studentId} />
        <div className={`student-rate-data ${powers[rate]} unselectable`}>
            <div className="comment-rate">
                {rate}
            </div>
            <CommentDate timestamp={timestamp} />
        </div>
    </div>
  )
}
