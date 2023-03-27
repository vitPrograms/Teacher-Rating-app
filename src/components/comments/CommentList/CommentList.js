import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllComments } from '../../../features/comments/commentsSlice'
import CommentElement from './CommentElement'

import './comments.scss'

export default function CommentList() {
    const comments = useSelector(selectAllComments)

    const renderComments = comments.map(comment => 
        <CommentElement key={comment.id} comment={comment} />
    )
  
    return (
        <>
        <div className="title comment-title">
            Коментарі студентів
        </div>
        
        <ul className='student-comments-list'>
            {renderComments}
        </ul>
        </>
        
    )
}
