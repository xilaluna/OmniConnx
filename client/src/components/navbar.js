import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div>
            <a href='/'>Omniconnx</a>
        </div>
        <div>
            <NavLink to='/prof'>profileTest</NavLink>
            {/* <a href='/'>placeholder</a> */}
        </div>
    </div>
  )
}

export default Navbar