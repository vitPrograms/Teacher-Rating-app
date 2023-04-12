import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';
import { setRate } from '../../../features/rate/rateSlice';
import { selectUserId } from '../../../features/user/userSlice';
import { selectFormRateData } from '../../../features/rate/formRateSlice';
import { ENDPOINT, SERVER } from '../../../config/server/serverConfig';
import { changeVotedStatus } from '../../../features/votedStatus/votedStatusSlice'
import { addComment } from '../../../features/comments/commentsSlice';

export default function RateButton({power, active = false}) {
    const dispatch = useDispatch()
    const formRate = useSelector(selectFormRateData)
    const studentId = useSelector(selectUserId)

    const postComment = () => {
        if(!formRate) return

        fetchStudentRate()
    }

    const fetchStudentRate = () => {
        const BASE_URL = SERVER.host
        const END_POINT = ENDPOINT.rate
        const options = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                student: studentId,
                teacher: formRate.teacherId,
            },
            body: JSON.stringify({
                rate: formRate.rate,
                content: formRate.description
            })
        }

        fetch(BASE_URL + END_POINT, options)
        .then(response => {
            return response.json();
        })
        .then(data => {
            dispatch(setRate(data))
            dispatch(addComment(data))
            dispatch(changeVotedStatus(true))
        })
        .catch(err => {
            console.log(err)
        })
    }

    const isActive = active ? 'active' : ''

  return (
    <Transition
        in={active}
        timeout={500}>
            {state => (
                <button 
                    className={`eveluate btn rate ${power} ${state} ${isActive} unselectable`}
                    disabled={!active}
                    onClick={postComment}>
                    <span className="rate-button">
                        Оцінити
                    </span>
                </button>
            )}
    </Transition>
  )
}
