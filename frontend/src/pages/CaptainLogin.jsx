import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainLogin = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [captainData, setCaptainData] = useState({});

const submitHandler = (e) => {

  e.preventDefault();
  console.log(email,password);

  setCaptainData({
    email: email,
    password: password
  })
  // console.log(userData);
  setEmail('');
  setPassword('');

}

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className = 'w-25 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
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
          <p className='flex item-center justify-center '> join a fleet ? <Link to='/captainSignup' className='text-blue-600'>  Register as a Capatain </Link></p>
        </form>
      </div>
      <div>
        <Link
          to='/login'
          className='bg-[#d5622d] flex item-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  border w-full  text-lg placeholder:text-base '
        >Sign in as User </Link>
      </div>
    </div>
  )
}

export default CaptainLogin ;
