import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, decreaseCount, increaseCount } from './Slice'; // adjust path if needed
import './cart.css'; 
import { useNavigate } from 'react-router-dom';



function CartPage() {
  var navigate = useNavigate()
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart?.items || []);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const butt = (e) => {
    e.preventDefault()
    navigate('/buy-now')
  }



  return (
    <div className='cart-page'>
      <h1>🛒 My Cart</h1>

      {items.length === 0 ? (
        <p className='empty'>Your cart is empty.</p>
      ) : (
        <>
          <div className='cart-items'>
            {items.map((item) => (
              <div className='cart-item' key={item.id}>
                <img src={item.img} alt={item.name} style={{ width: '100px', height: '100px' }} />
                
                {/* <span>{item.img}</span> */}
                <span>{item.name}</span>

                {/* <span>
                  {item.name} - {item.quantity} -
                </span> */}

                {/* <span className="quantity-controls"> 
                   <span className='qty-btn'><button className="qty-btn" onClick={() => dispatch(decreaseCount(item.id))}> - </button></span>
                    <span className="qty">{item.quantity}</span>
                    <span className='qty-btn'><button className="qty-btn" onClick={() => dispatch(increaseCount(item.id))}> + </button></span>
                </span> */}

                <span className="quantity-controls">
                    <button className="qty-btn" onClick={() => dispatch(decreaseCount(item.id))}>-</button>
                    <span className="qty">{item.quantity}</span>
                    <button className="qty-btn" onClick={() => dispatch(increaseCount(item.id))}>+</button>
                    <span className="price">₹{item.price * item.quantity}</span>
                </span>



                {/* <span>₹{item.price * item.quantity}</span> */}
                <button className='remove-btn' onClick={() => dispatch(removeFromCart(item.id))}> {' '}  Remove{' '}</button> 
                {/* ❌ */}
              </div>
            ))}
          </div>

          <div className='cart-summary'>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ₹{totalPrice}</p>
            <button className='clear-btn' onClick={() => dispatch(clearCart())}> {' '}Clear Cart{' '}</button>
            <button className='clear-btn' onClick={butt}>{' '}Buy Now{' '}</button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
