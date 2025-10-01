import React, {useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './buy.css';
import { useNavigate } from 'react-router-dom';
import phonepe from '../Images/PhonePe.webp'
import paytm from '../Images/Paytm.svg'
import gpay from '../Images/Google-Pay.png'
import cash from '../Images/cash on delivery.webp'

function Buy2() {

  var navigate = useNavigate()
  var [payment, setPayment] = useState('')

  const btn = () => {
    if (!payment) {
       toast.error('Please Select a Payment Option', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        theme: 'colored',
      })
    } else {
      toast.success('Booking Confirmed..!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        theme:'colored'
      })
      setTimeout(()=>{navigate('/orderPlaced')}, 2000)
    }
  }

  return (
    <div className='buy'>
      <h2>Payment Method</h2>
      <p>Choose your Payment Method</p>

      <div className='pay'>
        <label className='radio-label'>
          <input type='radio' name='payment' value='phonepe' onChange={(e) => setPayment(e.target.value)}/>
          <span><img src={phonepe} alt='PhonePe' style={{ width: '100px', height: '30px' }}/>
          </span>
        </label>

        <label className='radio-label'>
          <input type='radio' name='payment' value='paytm' onChange={(e) => setPayment(e.target.value)}/>
          <span>
            <img src={paytm} alt='PayTM' style={{ width: '100px', height: '30px', marginLeft: '8px' }}/>
          </span>
        </label>

        <label className='radio-label'>
          <input type='radio' name='payment' value='gpay' onChange={(e) => setPayment(e.target.value)}/>
          <span>
            <img src={gpay} alt='PhonePe' style={{ width: '100px', height: '30px', marginLeft: '8px' }}/>
          </span>
        </label>

        <label className='radio-label'>
          <input type='radio' name='payment' value='cash on delivery' onChange={(e) => setPayment(e.target.value)}/>
          <span>
            <img src={cash} alt='PhonePe' style={{ width: '100px', height: '30px', marginLeft: '8px' }}/>
          </span>
        </label>


      </div>
      <button className='btn22' onClick={btn}>
        Place Order
      </button>
    </div>
  );
}

export default Buy2;
