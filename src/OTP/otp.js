// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'
// import './otp.css';

// function Otp() {
//   const [generatedOtp, setGeneratedOtp] = useState('');
//   const [enteredOtp, setEnteredOtp] = useState('');
//   var navigate = useNavigate()

//   useEffect(() => {
//     const otp = Math.floor(1000 + Math.random() * 9000);
//     setGeneratedOtp(otp);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (enteredOtp === String(generatedOtp)) {
//       alert('Successfully logged in!');
//       navigate('/FetchParent')
//     } else {
//       alert('Invalid OTP! Please try again.');
//     }
//   }

//   return (
//     <div className='otp-main'>
//       <form>
//         <p className='otp-code'>Your OTP : {generatedOtp}</p>
//         <input type='text' value={enteredOtp} onChange={(e) => setEnteredOtp(e.target.value)} maxLength={4} placeholder="Enter OTP "/>
//         <button onClick={handleSubmit}>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Otp;


















import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './otp.css';

function Otp() {
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    generateOtp();
  }, []);

  const generateOtp = () => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    // pick one from each
    const lc = lowercase[Math.floor(Math.random() * lowercase.length)];
    const uc = uppercase[Math.floor(Math.random() * uppercase.length)];
    const num = numbers[Math.floor(Math.random() * numbers.length)];
    const sym = symbols[Math.floor(Math.random() * symbols.length)];

    // 2 random extra characters from all
    const allChars = lowercase + uppercase + numbers + symbols;
    const extra1 = allChars[Math.floor(Math.random() * allChars.length)];
    const extra2 = allChars[Math.floor(Math.random() * allChars.length)];

    // combine and shuffle
    const otpArray = [lc, uc, sym, num, extra1, extra2];
    const shuffledOtp = otpArray.sort(() => Math.random() - 0.5).join('');

    setGeneratedOtp(shuffledOtp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredOtp === generatedOtp) {
      alert('Successfully logged in!');
      navigate('/FetchParent');
    } else {
      alert('Invalid OTP! Please try again.');
    }
  };

  return (
    <div className='otp-main'>
      <form>
        <p className='otp-code'>Your OTP : {generatedOtp}</p>
        <input
          type='text'
          value={enteredOtp}
          onChange={(e) => setEnteredOtp(e.target.value)}
          maxLength={6}
          placeholder='Enter OTP '
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Otp;
