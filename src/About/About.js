import React from 'react';
import './about.css';
import quality from '../Images/quality.jpg'
import fast from '../Images/fast.webp'
import service from '../Images/24.jpg'

function About() {
  return (
    <div className='about-page'>
      <h1>About Ashish Store</h1>
      <p>
        Welcome to Ashu Store! We are dedicated to providing the best products
        with top-notch customer service. Our mission is to make shopping
        convenient and enjoyable for everyone.
      </p>

      <div className='about-features'>
        <div className='feature'>
          <img src={quality} alt='Quality Products' />
          <h3>Quality Products</h3>
          <p>We ensure all our products meet the highest quality standards.</p>
        </div>
        <div className='feature'>
          <img src={fast} alt='Fast Delivery' />
          <h3>Fast Delivery</h3>
          <p>Get your orders delivered quickly to your doorstep.</p>
        </div>
        <div className='feature'>
          <img src={service} alt='24/7 Support' />
          <h3>24/7 Support</h3>
          <p>Our support team is always available to assist you.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
