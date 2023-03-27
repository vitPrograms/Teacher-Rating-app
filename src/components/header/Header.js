import React from 'react'
import Logo from './Logo'
import SearchLine from './SearchLine'
import UserData from './UserData'

import './header.scss'

export default function Header() {
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
