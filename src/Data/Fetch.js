import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './userSlice';
import './fetch.css';
import { addToCart } from '../Cart/Slice';
import { useNavigate } from 'react-router-dom';


function Fetch() {
  var navigate = useNavigate()
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  // ⭐ Ratings State
  const [ratings, setRatings] = useState([0, 0, 0, 0, 0]);
  const starRows = [5];

  const handleClick = (rowIndex, starIndex) => {
    const newRatings = [...ratings];
    newRatings[rowIndex] = starIndex + 1;
    setRatings(newRatings);
  };

  // CART
  // const CartCount = useSelector(state=>state.cart)
  const cartItems = useSelector((state) => state.cart?.items || []);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const buy = (e) => {
    e.preventDefault()
    navigate('/buy-now')
  }

  // Loading & Error states
  if (loading) return <p>...Loading</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Top Products For You</h2>

      <div style={{ marginBottom: '20px', fontWeight: 'bold' }}>
        🛒 Cart Items: {totalItems}
      </div>

      <div className='main-container'>
        <div className='left-panel'>
          {starRows.map((numStars, rowIndex) => (
            <div className='star-row' key={rowIndex}>
              {[...Array(numStars)].map((_, starIndex) => (
                <span
                  key={starIndex}
                  className={`star ${
                    ratings[rowIndex] > starIndex ? 'selected' : ''
                  }`}
                  onClick={() => handleClick(rowIndex, starIndex)}
                >
                  {' '}
                  ★{' '}
                </span>
              ))}
            </div>
          ))}
        </div>

        <div className='right-panel'>
          <div className='fetch-container'>
            {data.map((user) => (
              <div className='fetch' key={user.id}>
                <img
                  src={process.env.PUBLIC_URL + user.img}
                  alt={user.name || `user-${user.id}`}
                />
                <p style={{ color: 'white' }}>{user.name}</p>
                <p style={{ color: 'white' }}>₹{user.price}/-</p>

                <div className='butt'>
                  <button onClick={() => handleAddToCart(user)}>
                    {' '}
                    Add to Cart{' '}
                  </button>
                  <button onClick={buy}>Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fetch;
