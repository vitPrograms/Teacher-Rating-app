import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <div className="header-logo">
        <Link to={"/"}>
          <img className="logo unselectable" src="https://ukd.edu.ua/themes/custom/bootstrap_ukd/images/logo_hor_red.svg" />
        </Link>
    </div>
  )
}
