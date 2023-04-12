import React, { useEffect, useMemo, useState } from 'react'
import debouce from "lodash.debounce";
import { useDispatch } from 'react-redux';
import { setFormDescription } from '../../../features/rate/formRateSlice'

export default function DescriptionField() {
  const [lastDescription, setLastDescription] = useState('')
  const dispatch = useDispatch() 

  const handleChange = e => {
    dispatch(setFormDescription(e.target.value))
    setLastDescription(e.target.value)
  }

  const debouncedResults = useMemo(() => {
    return debouce(handleChange, 500);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <div className="student-comment-line">
        <textarea 
          className="comment-area" 
          type="text" 
          maxLength="700"
          placeholder="Введіть свій коментар"
          onChange={debouncedResults} ></textarea>
          <span className='charactersUsed'>
            {lastDescription.length}/700
          </span>
    </div>
  )
}
