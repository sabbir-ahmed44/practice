import React from 'react'
import {  NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
        <NavLink to="/Home" className='navbar'>Home</NavLink>
        <NavLink to="/Contact" className='navbar'>Contact</NavLink>
        <NavLink to="/Page" className='navbar'>Page</NavLink>
        <NavLink to="/Error" className='navbar'>Error</NavLink>
        <NavLink to="/About" className='navbar'>About</NavLink>
        <NavLink to="/Prodact" className='navbar'>Prodact</NavLink>

    </nav>
  )
}

export default NavBar;