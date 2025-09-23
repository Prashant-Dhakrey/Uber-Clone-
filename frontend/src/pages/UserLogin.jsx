import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const UserLogin = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [userData, setUserData] = useState({});

const submitHandler = (e) => {

  e.preventDefault();
  console.log(email,password);
  setUserData({
    email: email,
    password: password
  })
  console.log(userData);
  setEmail('');
  setPassword('');

}

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="data:image/png;base64,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" alt="" />
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='text-lg font-medium mb-2 '> What's you email </h3>
          <input
            required
            value={email}
            className='bg[#eeeeee]  mb-7 rounded px-4 py-2  border w-full text-lg placeholder:text-base '
            type="email"
            placeholder='email@exmaple.com'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h3 className=' text-lg font-medium mb-2 '>Enter  Password </h3>
          <input
            className='bg[#eeeeee]  mb-7 rounded px-4 py-2  border w-full  text-lg placeholder:text-base '
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required type="password"
            placeholder='password'
          />
          <Link
            to='/login'
            className='bg-[#111] flex itme-center justify-center text-white font-semibold mb-3 rounded px-4 py-2  border w-full  text-lg placeholder:text-base '>
            Login </Link>
          <p className='text-center-align'> New here? <Link to='/signup' className='text-blue-600'>Create New Accout</Link></p>
        </form>
      </div>
      <div>
        <Link
          to='/captainLogin'
          className='bg-[#10b461] flex item-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  border w-full  text-lg placeholder:text-base '
        >Sign in as Captain </Link>
      </div>
    </div>
  )
}

export default UserLogin;
