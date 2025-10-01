import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../Images/logo.jpg'
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
        <li><img src={logo} alt="Ashu Store" style={{ width: '200px', height: '30px', marginTop: '5px' }}/></li>
      </ul>
    </div>

    <div className='rightheader'>
      <ul>
        <li><NavLink to='/home' style={({isActive}) =>{return isActive ? {color: 'green'}:{color:'white'}}} >Home</NavLink></li>
        <li><NavLink to='/about' style={({isActive}) =>{return isActive ? {color: 'green'}:{color:'white'}}} >About</NavLink></li>
        <li> <NavLink to="/products" style={({ isActive }) => isActive ? { color: "green" } : { color: "white" }} > Products </NavLink> </li>
        <li><NavLink to='/login' style={({ isActive }) => { return isActive ? { color: 'green' } : { color: 'white' } }} >Log IN</NavLink></li>
        <li> <NavLink to="/cart" style={({ isActive }) => isActive ? { color: "green" } : { color: "white" }} > 🛒 {totalItems} </NavLink> </li>
      </ul>
      </div>
      
  </div>
    
  )
}

export default Header