import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'

function Header() { 
  return ( 
  <nav className="navbar navbar-expand-lg navbar-dark bg-light"> 
    <img className='logo' src='https://freelogopng.com/images/all_img/1656180317shopee-logo-png.png' 
    height={70} width={200}
    />
  <button className="navbar-toggler" type="button" data-toggle="collapse" 
  data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
  aria-label="Toggle navigation"> 
    <span className="navbar-toggler-icon"></span> 
  </button> 
  <div className="collapse navbar-collapse" id="navbarNav"> 
    <ul className="navbar-nav ml-auto fw-bold "> 
      <li className="nav-item ">
        <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link inactive-link')}
        >Home</NavLink>
      </li> 

      <li className="nav-item">
        <NavLink
        to={"/shop"}
        className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link inactive-link')}
        >Shop</NavLink>
      </li>

      <li className="nav-item">
        <NavLink
        to={"/about"}
        className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link inactive-link')}
        >About Us</NavLink>
      </li>
       
      <li className="nav-item">
        <NavLink
        to={"/contact"}
        className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link inactive-link')}
        >Contact</NavLink>
      </li>
    </ul> 
  </div> 
</nav> ); 
}

export default Header
