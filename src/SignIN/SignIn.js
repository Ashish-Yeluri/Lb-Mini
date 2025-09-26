import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signin.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    if (!name || !email || !password) {
      toast.error('meeru mottam fill cheyyali andi 👊', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        theme: 'colored',
      });
      return;
    }

    // Save data in localStorage
    localStorage.setItem('signupData', JSON.stringify(formData));

    toast.success('haa baane baaane ...🤪 ', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
      theme: 'colored',
    });

    // Navigate after a short delay
    setTimeout(() => navigate('/login'), 2000);
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

        <label>Email</label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />

        <button onClick={handleSignUp} className='sign'>
          SignUP
        </button>
      </form>
    </div>
  );
}

export default SignIn;
