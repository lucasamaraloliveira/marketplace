import React from 'react'
import './Navbar.css'
import Logo from '../../../assets/logo.png'
import Avatar from '../../../assets/avatar.png'
import Cart from '../../../assets/cart.png'



function Navbar() {
  return (
    <div className= 'navbar'>
        <ul>
          <li><a href="#"> <img src= {Logo} alt="" /></a></li>
          <li><a href="#"> Home</a></li>
          <li><a href="#Project"> Best Seller</a></li>
          <li><a href="#Contact"> Promotion</a></li>
          <li><a href="#Contact"> Categories</a></li>
          <input type="text" placeholder='Search Product...' />
          <a href=""><p><img src={Cart} alt="" />cart (0)</p></a>
          <li><img className='navbar-avatar' src={Avatar} alt="user" /></li> <a className='navbar-logout' href="">Logout</a>
        </ul>
    </div>
  )
}

export default Navbar