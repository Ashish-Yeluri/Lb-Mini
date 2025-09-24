import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const [error, setError] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { name, password } = formData
    if (!name || !password) {
      alert('Please fill all fields before signing up');
      return;
    }

    const storedData = JSON.parse(localStorage.getItem('signupData'));

    if (!storedData) {
      setError("Ichina USER ledu ra babu Lopala")
      return;
    }

    if (
      formData.name === storedData.name &&
      formData.password === storedData.password
    ) {
      setError('');
      navigate('/otp')
    } else {
      setError('Password Sarigga Ivvu BEY');
    }
  };

  return (
    <div className='main'>
      <form>
        <label>Name</label>
        <input type='text' name='name' value={formData.name} onChange={handleChange}/>

        <label>Password</label>
        <input type='password' name='password' value={formData.password} onChange={handleChange} />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        <button onClick={handleLogin}>SignUP</button>
      </form>
    </div>
  )
}

export default Login
