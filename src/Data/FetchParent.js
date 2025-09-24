import React from 'react'
// import { Provider } from 'react-redux'
// import { Store } from './Store'
import Fetch from './Fetch'
import Cart from '../Cart/Cart'
import Fetch2 from '../Practise/Fetch'

function FetchParent() {
  return (
    <div>
      {/* <Provider store={Store}>
        <Fetch/>
      </Provider> */}
      <Fetch />
      <Fetch2/>
      <Cart/>
    </div>
  )
}

export default FetchParent
