import React from 'react'
import { addCart } from './Sliceee'
import { useDispatch, useSelector } from 'react-redux'

function Fetch2() {
  var dispatch = useDispatch()
  
  var fetchh = useSelector((state) => state.cart?.items || [])
  
  var total = fetchh.reduce((acc, item) => acc + item.quantity, 0 )

 const Submit =(product) => {
    dispatch(addCart(product))
  }
  return (
    <div>
      <h2>total: {total}</h2>
      <button onClick={()=>Submit()}>Add to Cart</button>
    </div>
  )
}

export default Fetch2
