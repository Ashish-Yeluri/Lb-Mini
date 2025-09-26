import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Forgot() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleReset = (e) => {
    e.preventDefault();

    if (!name || !newPassword || !confirmPassword) {
      // setError('Please fill all fields.');
      toast.error('Sairga Fill Chey bey',{
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        theme: 'colored'
      })
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    let storedData = JSON.parse(localStorage.getItem('signupData'));

    if (!storedData) {
      setError('No user found. Please sign up first.');
      return;
    }

    if (storedData.name !== name) {
      setError('Name not found.');
      return;
    }

    // Update password
    storedData.password = newPassword;
    localStorage.setItem('signupData', JSON.stringify(storedData));

    setError('');
    setSuccess('Password reset successful! Please login again.');

    setTimeout(() => navigate('/login'), 2000);
  };

  return (
    <div className='main'>
      <form onSubmit={handleReset}>
        <h2>Forgot Password</h2>

        <label>Name</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter your registered name'
        />

        <label>New Password</label>
        <input
          type='password'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder='Enter new password'
        />

        <label>Confirm Password</label>
        <input
          type='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder='Confirm new password'
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}

        <button type='submit' className='forgot'>Reset Password</button>
      </form>
    </div>
  );
}

export default Forgot;
