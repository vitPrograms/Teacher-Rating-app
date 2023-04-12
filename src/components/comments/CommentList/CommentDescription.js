import React, { useState } from 'react'

export default function CommentDescription({content}) {
  const [isExpanded, setExpanded] = useState(false)

  const expandComment = e => {
    const parent = e.target.parentElement
    const target = parent.querySelector('.comment-content')
    const btn = parent.querySelector('.expand-comment-btn')

    if(isExpanded) {
      target.classList.add("short")
      btn.textContent = 'Показати'
    }else {
      target.classList.remove("short")
      btn.textContent = 'Приховати'
    }

    setExpanded(!isExpanded)
  }
  
  const descriptionBlock = () => {
    if(content?.length >= 400) {
      return (
        <>
          <div className={`comment-content short`}>
            <p>{content}</p>
          </div>
          <button className={`expand-comment-btn`} onClick={expandComment}>
            {'Показати'}
          </button>

        </>
        
      )
    } else if(content == '' || content == null) {
      return (
        <div className={`comment-content unactive`}>{'Коментар відсутній'}</div>  
      )
    } else {
      return (
        <div className={`comment-content`}>{content}</div>
      )
    }
  }
  
  return (
    <>
      {descriptionBlock()}
    </> 
  )
}
