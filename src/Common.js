import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './2-TASK/Login/Login'
import SignIn from './2-TASK/Login/SignIn'

function Common() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
    </div>
  )
}

export default Common
