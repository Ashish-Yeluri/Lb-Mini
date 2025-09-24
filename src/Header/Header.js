import React from 'react'
import { NavLink } from 'react-router-dom';
import './style.css'
import { useSelector } from 'react-redux';

function Header() {

    // CART 
    const cartItems = useSelector((state) => state.cart?.items || []);
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  
  return (
    <div className="header">
    
    <div className="leftheader">
      <ul>
        <li><NavLink to='/ashish-store' style={({isActive}) =>{return isActive ? {color: 'green'}:{color:'white'}}} >Ashu Store</NavLink></li>
      </ul>
    </div>

    <div className='rightheader'>
      <ul>
        <li><NavLink to='/home' style={({isActive}) =>{return isActive ? {color: 'green'}:{color:'white'}}} >Home</NavLink></li>
        <li><NavLink to='/about' style={({isActive}) =>{return isActive ? {color: 'green'}:{color:'white'}}} >About</NavLink></li>
        <li><NavLink to='/signin' style={({ isActive }) => { return isActive ? { color: 'green' } : { color: 'white' } }} >Sign IN</NavLink></li>
        <li> <NavLink to="/cart" style={({ isActive }) => isActive ? { color: "green" } : { color: "white" }} > 🛒 {totalItems} </NavLink> </li>

      </ul>
      </div>
      
  </div>
  )
}

export default Header