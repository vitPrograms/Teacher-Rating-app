import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';
import { addComment } from '../../../features/comments/commentsSlice';
import { selectDescription, selectRate } from '../../../features/rate/rateSlice';
import { addVote } from '../../../features/studentsRate/studentsRateSlice'
import { changeVotedStatus } from '../../../features/votedStatus/votedStatusSlice';

export default function RateButton({power, active = false}) {
    const dispatch = useDispatch()
    const rate = useSelector(selectRate)
    const description = useSelector(selectDescription)

    const postComment = () => {
        if(!rate) return

        dispatch(addComment(2, rate, description))
        dispatch(addVote(rate))
        dispatch(changeVotedStatus(true))
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
