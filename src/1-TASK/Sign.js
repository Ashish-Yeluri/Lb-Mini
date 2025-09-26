import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './task.css'

function Sign() {
  var navigate = useNavigate()

  var [data, setData] = useState({
    Mobile: '',
    Password: ''
  })

  const Change = (e) => {
    const { name, value } = e.target
    setData({...data, [name]: value})
  }

  const sign = (e) => {
    e.preventDefault()
    const {Mobile, Password} = data
    setTimeout(()=> navigate('/login'), 2000)


    if (!Mobile || !Password) {
      toast.error('Fill All the Fields', {
        position: 'top-right',
        theme: 'colored',
        autoClose: 2000,
        hideProgressBar: true
      })
      return;
    }

    localStorage.setItem('Data', JSON.stringify(data))
    toast.success('Created Account', {
      position: 'top-right',
      theme: 'colored',
      autoClose: 2000,
      hideProgressBar: true
    })
    setTimeout(() => navigate('/login'), 2000);
  }


  return (
    <div>
      <div className='container'>
        <label>Mobile</label>
        <input type='text' name='Mobile' placeholder='Enter Mobile Number' onChange={Change} />
        <label>Password</label>
        <input type='password' name='Password' placeholder='Enter Password' onChange={Change} />
        <button onClick={sign}>Sign In</button>
      </div>
    </div>
  );
}

export default Sign
