import React, { useEffect, useMemo, useState } from 'react'
import debouce from "lodash.debounce";
import { useDispatch } from 'react-redux';
import { setDescription } from '../../../features/rate/rateSlice'

export default function DescriptionField() {
  const [lastDescription, setLastDescription] = useState('')
  const dispatch = useDispatch() 

  const handleChange = e => setLastDescription(e.target.value)

  const debouncedResults = useMemo(() => {
    return debouce(handleChange, 500);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  dispatch(setDescription(lastDescription))

  return (
    <div className="student-comment-line">
        <textarea 
          className="comment-area" 
          type="" 
          placeholder="Введіть свій коментар"
          onChange={debouncedResults}>

          </textarea>
    </div>
  )
}
