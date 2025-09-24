

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import SignIn from './SignIN/SignIn'
import Otp from './OTP/otp'
import Login from './LogInn/Login'
import FetchParent from './Data/FetchParent'
import CartPage from './Cart/CartPage'

function Parent() {
  return (
    <div>
      <Routes>
        <Route path='/' element={''} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/login' element={<Login />} />
        <Route path='/otp' element={<Otp />} />
        <Route path='/fetchParent' element={<FetchParent />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default Parent
