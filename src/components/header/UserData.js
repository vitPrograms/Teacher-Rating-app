import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAuthenticated, selectAuthentication, setAuthenticated, setAuthentication } from '../../features/user/authenticationSlice'
import { Link, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { message } from '../../config/client/message'
import { path } from '../../config/client/path'

export default function UserData() {
  const dispatch = useDispatch()
  const token = Cookies.get("token")
  const user = useSelector(selectAuthentication)
  const isAuthenticated = useSelector(selectAuthenticated)

  const googleLogout = () => {
    if(!isAuthenticated || !token) {
      return;
    }

    Cookies.remove("token")
    dispatch(setAuthenticated(false))

    toast.success(message.successLogout)

    return <>
      <Navigate to={path.BASE} />
    </>
  }

  if(isAuthenticated) {
    return (
      <div className="header-student-data">
        <span>{user?.givenName}</span>
        <button className='unselectable' onClick={googleLogout}>(Вийти)</button>
        <Link to="/login" >Login</Link>
      </div>
    )
  } else {
    return <Link to="/login" >Login</Link>
  }
  
  
  if(token) {
    dispatch(setAuthentication(token))
  } else {
    return <Link to="/login" >Login</Link>
  }
}
