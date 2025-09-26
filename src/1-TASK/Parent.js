import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Sign from './Sign';

function Parent() {
  return (
    <div>
      <Routes>
        <Route path='' element={<Sign />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default Parent
