import React from 'react'
import './navbar.css'
import {netflix_logo, nav_avatar} from '../../Constants'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={netflix_logo} alt="Logo" />
      <img className='avatar' src={nav_avatar} alt="avatar" />
    </div>
  )
}

export default Navbar
