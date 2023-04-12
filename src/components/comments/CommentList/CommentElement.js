import React from 'react'
import CommentDescription from './CommentDescription'
import CommentRate from './CommentRate'

export default function CommentElement({comment}) {
    const {student, rate, date, content} = comment

    return (
      <li className="comment-element">
          <div className="comment-block">
              <CommentRate studentId={student} rate={rate} timestamp={date} />
              <hr />
              <CommentDescription content={content} />
          </div>
      </li>
    )
}
