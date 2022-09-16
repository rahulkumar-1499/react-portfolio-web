import React from 'react'
import './header.css'
import Setbuttons from './Setbuttons'
import ME from '../../assests/RI1.jpeg'
import Headericons from './Headericons'

const Header = () => {
  return (
    <header>
      <div className="containers header__containers">
        <h5>Hello! I am</h5>
        <h1>Rahul Kumar</h1>
        <h5 className="text-light">React.Js Developer</h5>
        <Setbuttons />

        <Headericons />
        <div className="me">
          <img src={ME} alt="Error" />
        </div>

        <a href="#contacts" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
