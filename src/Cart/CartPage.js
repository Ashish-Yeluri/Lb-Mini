import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from './Slice'; // adjust path if needed
import './cart.css'; // optional styling

function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart?.items || []);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>₹{item.price * item.quantity}</span>
                <button
                  className='remove-btn'
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  ❌ Remove
                </button>
              </div>
            ))}
          </div>

          <div className='cart-summary'>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ₹{totalPrice}</p>
            <button className='clear-btn' onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
