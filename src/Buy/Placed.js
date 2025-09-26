import React from 'react';
import { useSelector } from 'react-redux';
import './places.css'

function Placed() {
  const items = useSelector((state) => state.cart?.items || []);

  const address = JSON.parse(localStorage.getItem('userAddress')) || {};

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className='placed'>
      <h1>✅ Order Placed Successfully!</h1>
      <p>Thank you for shopping with us. Your order details are below:</p>

      <div className='items'>
        {items.map((item) => (
          <div className='item' key={item.id}>
            <img src={item.img} alt={item.name} style={{ width: '100px', height: '100px' }}/>
            <span>{item.name}</span>
            <span className='quantity'> Qty: {item.quantity}
            <span className='price'> | ₹{item.price * item.quantity}</span>
            </span>
          </div>
        ))}
      </div>

      <div className='entire'>
      <div className='left'>
         <div className='summary'>
        <h3>Order Summary</h3> <hr></hr>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: ₹{totalPrice}</p>
      </div></div>

      <div className='right'>
      <div className='summary'>
        <h3>Delivery Address</h3> <hr />
        {address.name ? (
          <div>
            <p><strong>Name:</strong> {address.name}</p>
            <p><strong>Address:</strong> {address.address}</p>
            <p><strong>Mobile:</strong> {address.number1}</p>
            <p><strong>Alternate:</strong> {address.number2}</p>
          </div>
        ) : (
          <p>No address found.</p>
        )}
      
      </div></div>
     </div>
    </div>
  );
}

export default Placed;
