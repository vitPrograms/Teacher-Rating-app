import React from 'react'
import Logo from './Logo'
import SearchLine from './SearchLine'
import UserData from './UserData'

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
