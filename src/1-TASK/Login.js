import React, {useState} from 'react'
// import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {

  // var navigate = useNavigate()

  var [data, setData] = useState({
    Mobile: ''
  })

  const num = (e) => {
    const { name, value } = e.target
    setData({...data, [name] : value })
  }

  const otpp = (e) => {
    e.preventDefault()
    const { Mobile } = data
    
    if (!Mobile) {
      toast.error('Enter Mobile Number', {
        position: 'top-right',
        hideProgressBar: true,
        autoClose: 2000,
        theme: 'colored'
      })
      return;

      const storeData = JSON.parse(localStorage.getItem('Data'))
      if (!storeData) {
        toast.error('No Mobile Number Found', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
          theme: 'colored',
        });
        return;
      }
    }
  }
  return (
    <div>
      <label>Mobile No</label>
      <input type="text" name="Mobile" placeholder='Enter Mobile Number' onChange={num} />
      <button onClick={otpp}>Verify</button>
    </div>
  )
}

export default Login
