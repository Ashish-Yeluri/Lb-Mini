import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './buy.css'

function Buy() {
  var navigate = useNavigate()
   var [add, setAdd] = useState('')
  const save = (e) => {
    if (!add.name || !add.address || !add.number1 || !add.number2) {
      toast.error('Please Add Address Fields', {
        position: 'top-right',
        hideProgressBar: true,
        autoClose: 2000,
        theme:'colored'
      })
    } else {
      localStorage.setItem('userAddress', JSON.stringify(add));
      toast.success('Succeddfully Added Address', {
        position: 'top-right',
        hideProgressBar: true,
        theme: 'colored',
        autoClose: 2000
      })
      setTimeout(() => navigate('/payment'));
    }
  }
  return (
    <div className='buy'>
      <h2>Add Address</h2>
      <input type='text' name='name' placeholder='Enter Your Full Name' required onChange={(e) => setAdd({ ...add, name: e.target.value })} />
      <input type='text' name='address' placeholder='Enter House No' required onChange={(e) => setAdd({...add, address: e.target.value })} />
      <input type='text' name='number1' placeholder='Enter Mobile Number' required onChange={(e) => setAdd({ ...add, number1: e.target.value })} />
      <input type='text' name='number2' placeholder='Alternate Mobile' required onChange={(e) => setAdd({ ...add, number2: e.target.value })} />
      <button onClick={save}>Save Address</button>
    </div>
  );
}

export default Buy
