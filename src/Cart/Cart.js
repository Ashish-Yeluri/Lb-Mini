// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart, clearCart } from '../Cart/Slice';

// function Cart() {
//   const dispatch = useDispatch();
//   const items = useSelector((state) => state.cart.items);
//   console.log('Cart render - items:', items);

//   return (
//     <div>
//       <h2>My Cart</h2>
//       {items.length === 0 ? (
//         <p>Cart is empty</p>
//       ) : (
//         items.map((item) => (
//           <div key={item.id}>
//             <p>
//               {item.name} - {item.quantity}
//             </p>
//             <button onClick={() => dispatch(removeFromCart(item.id))}>
//               Remove
//             </button>
//           </div>
//         ))
//       )}
//       {items.length > 0 && (
//         <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
//       )}
//     </div>
//   );
// }

// export default Cart;
