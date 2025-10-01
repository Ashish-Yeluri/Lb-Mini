import React from 'react';
import { useNavigate } from 'react-router-dom'
import './home.css';

function Home() {

  var navigate = useNavigate()

  const shop = (e) => {
    e.preventDefault()
    navigate('/products');
  }

  const shop2 = (e) => {
    e.preventDefault()
    navigate('/login');
  }

  return (
    <div className='mains'>
      <div className='scroll-container'>
        <div className='scroll-content'>
          {' '}
          🎉 Welcome to Ashish Store – Big Offers Everyday! 🎁 | Flat 50% OFF
          onElectronics 🔥 | Free Shipping 🚚 | Limited Time Deals ⏰{' '}
        </div>
      </div>

      <h1 className='title'>
        💎{' '}
        <span style={{ fontFamily: "'Dancing Script', cursive" }}>LongBow</span>{' '}
        <span className='highlight'>Store 💎</span>{' '}
      </h1>
      <p className='subtitle'>
        {' '}
        Your one-stop destination for fashion, gadgets & more ✨{' '}
      </p>

      <div className='buttons'>
        <button className='btn primary' onClick={shop}>
          🛒 Shop Now
        </button>
        <button className='btn secondary' onClick={shop2}>
          ⭐ Explore Deals
        </button>
      </div>

      <div className='text-scroll-box'>
        <div className='text-scroll-content'>
          <div className='scroll-item'>🎉 Big Offers Everyday!</div>
          <div className='scroll-item'>📱 Flat 50% OFF on Electronics</div>
          <div className='scroll-item'>🚚 Free Shipping on all orders</div>
          <div className='scroll-item'>⏰ Limited Time Deals!</div>
          <div className='scroll-item'>✨ New Arrivals Daily!</div>
        </div>
      </div>

      <footer className='footer'>
        © {new Date().getFullYear()} Ashish Store | Made with ❤️ by Ashish
        Yeluri
      </footer>
    </div>
  );
}

export default Home;
