import { useEffect } from 'react'
import DescriptionField from './DescriptionField'
import RateButtonsLine from './RateButtonsLine'
import RateLine from './RateLine'

import './form.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectTeacherId } from '../../../features/teacher/teacherSlice'
import { setFormTeacherId } from '../../../features/rate/formRateSlice'

export default function RateForm() {
  const dispatch = useDispatch()
  const currentTeacherId = useSelector(selectTeacherId)

  useEffect(() => {
    dispatch(setFormTeacherId(currentTeacherId))
  }, [])

  return (
    <div className="rate-line-block">
        <RateLine />
        <DescriptionField />
        <RateButtonsLine />
    </div>
  )
}
