import React from 'react'
import Logo from './Logo'
import SearchLine from './SearchLine'
import UserData from './UserData'

import './header.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectAuthentication } from '../../features/user/authenticationSlice'
import { selectUserId, setUser } from '../../features/user/userSlice'
import { ENDPOINT, SERVER } from '../../config/server/serverConfig'

export default function Header() {
  const authentication = useSelector(selectAuthentication)
  const userId = useSelector(selectUserId)
  const dispatch = useDispatch()

  if(authentication.token && authentication.email && userId === 0) {
    const BASE_URL = SERVER.host
    const STUDENT_PATH = ENDPOINT.student
    const options = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            token: authentication.token,
            email: authentication.email
        }
    }

    fetch(BASE_URL + STUDENT_PATH, options)
    .then(response => {
        return response.json();
    })
    .then(student => {
      dispatch(setUser(student))
    })
    .catch(err => {
        console.log(err)
    })
  }

  return (
    <header>
        <nav>
            <Logo />
            <SearchLine />
            <UserData />
        </nav>
    </header>
  )
}
