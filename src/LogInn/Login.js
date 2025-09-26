import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { name, password } = formData;

    if (!name || !password) {
      toast.error('Please fill all fields before logging in', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        theme: 'colored',
      });
      return;
    }

    const storedData = JSON.parse(localStorage.getItem('signupData'));

    if (!storedData) {
      toast.error('No user found. Please sign up first.', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        theme: 'colored',
      });
      return;
    }

    if (
      formData.name === storedData.name &&
      formData.password === storedData.password
    ) {
      toast.success('annaaa eewwwww 🎉', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        theme: 'colored',
      });
      navigate('/otp');
    } else {
      toast.error('tagala pettandi Niranjan Garu...😡', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        theme: 'light',
      });
    }
  };

  const createAcc = (e) => {
    e.preventDefault();
    navigate('/signin');
  };

  const forgotpass = (e) => {
    e.preventDefault();
    navigate('/forgotpassword');
  };

  return (
    <div className='main'>
      <form>
        <label>Name</label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />

        <button onClick={handleLogin} className='log'>
          Log IN
        </button>
      </form>

      <p style={{ color: 'black' }}>
        Don’t have an account?{' '}
        <button className='creation' onClick={createAcc}>
          Create a Account
        </button>
      </p>
      <p style={{ color: 'black' }}>
        Forgot Password?{' '}
        <button className='creation2' onClick={forgotpass}>
          Reset it.
        </button>
      </p>
    </div>
  );
}

export default Login;
