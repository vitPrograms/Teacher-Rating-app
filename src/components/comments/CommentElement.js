import React from 'react'
import CommentDescription from './CommentDescription'
import CommentRate from './CommentRate'

export default function CommentElement({comment}) {
    const {studentId, rate, timestamp, description} = comment

  return (
    <li className="comment-element">
        <div className="comment-block">
            <CommentRate studentId={studentId} rate={rate} timestamp={timestamp} />
            <hr />
            <CommentDescription description={description} />
        </div>
    </li>
  )
}
