import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllComments, setComments } from '../../../features/comments/commentsSlice'
import CommentElement from './CommentElement'

import './comments.scss'
import { selectTeacherId } from '../../../features/teacher/teacherSlice'
import { selectUserId } from '../../../features/user/userSlice'

export default function CommentList() {
    const comments = useSelector(selectAllComments)
    const teacherId = useSelector(selectTeacherId)
    const studentId = useSelector(selectUserId)
    const dispatch = useDispatch()

    const fetchStudentComments = () => {
        const BASE_URL = 'http://localhost:8080/api/teacher'

        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }   
        };

        fetch(BASE_URL + `/${teacherId}/rate`, options)
            .then(response => response.json())
            .then(comments => {
                dispatch(setComments(comments))
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchStudentComments()
    }, [teacherId, studentId])

    const renderComments = comments.map(comment => 
        <CommentElement key={comment.id} comment={comment} />
    )
  
    if(comments.length === 0 || comments === [] ) {
        return <div className='no-rates'>
            <h2>☝️Будьте першими!</h2>
            <span className='unactive'>Цей викладач немає жодної оцінки.</span>
        </div>
    }

    return (
            <>
                <div className="title comment-title">
                    Коментарі студентів
                </div>
                <ul className='student-comments-list'>{renderComments}</ul>
            </>
    )
}
