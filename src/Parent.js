import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import SignIn from './SignIN/SignIn'
import Otp from './OTP/otp'
import Login from './LogInn/Login'
import FetchParent from './Data/FetchParent'
import CartPage from './Cart/CartPage'
import Forgot from './LogInn/Forgot'
import Buy from './Buy/Buy'
import Buy2 from './Buy/Buy2'
import Placed from './Buy/Placed'

function Parent() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotpassword' element={<Forgot />} />
        <Route path='/otp' element={<Otp />} />
        <Route path='/fetchParent' element={<FetchParent />} />
        <Route path='/products' element={<FetchParent />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/buy-now' element={<Buy />} />
        <Route path='/payment' element={<Buy2 />} />
        <Route path='/orderPlaced' element={<Placed/>} />
      </Routes>
    </div>
  );
}

export default Parent
