import React from 'react'
import Header from './2-TASK/Header/Header'
import Common from './Common'
import './app3.css'

function App3() {
  return (
    <div className='app3'>
      <Header/>
      <div className='common' style={{paddingTop: '60px'}}> <Common/> </div>
    </div>
  )
}

export default App3
