import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signin.css';

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
       alert('Please fill all fields before signing up');
       return; 
     }
    localStorage.setItem('signupData', JSON.stringify(formData));
    navigate('/login');
  };

  return (
    <div className='main'>
      <form>
        <label>Name</label>
        <input type='text' name='name' value={formData.name} onChange={handleChange}/>

        <label>Email</label>
        <input type='email' name='email' value={formData.email} onChange={handleChange} />

        <label>Password</label>
        <input type='password' name='password' value={formData.password} onChange={handleChange} />
        <button onClick={handleSignUp}>SignUP</button>
      </form>
    </div>
  );
}

export default SignIn;
