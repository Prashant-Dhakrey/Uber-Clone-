import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import CaptainDataContext from '../context/CaptainContext';

const CaptainSignup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName,setfirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [captainData, setCaptainData] = useState({})

  const {captain,setCaptian} = React.useContext(CaptainDataContext)

  const submitHandler = (e) => {

    e.preventDefault()
    setCaptainData({

      fullname:{
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password

    })

    setEmail('')
    setfirstName('')
    setLastName('')
    setPassword('')

  }

  return (
    <div>
      <div className='py-5 px-5 h-screen flex flex-col justify-between'>
        <div>
          <img className = 'w-25 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>

            <h3 className='text-lg font-medium mb-2' >What's our captain's Name </h3>
            <div className='flex  gap-3 mb-5'>

              <input
                required
                className='bg[#eeeeee] w-1/2  rounded px-4 py-2  border  text-lg placeholder:text-base '
                type="text"
                placeholder='First Name'
                value={firstName}
                onChange={(e) => {
                  setfirstName(e.target.value)
                }}
              />

              <input
                required
                className='bg[#eeeeee] w-1/2 rounded px-4 py-2  border  text-lg placeholder:text-base '
                type="text"
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}

              />

            </div>

            <h3 className='text-lg font-medium mb-2'> What's our captain's email </h3>
            <input
              required
              className='bg[#eeeeee]  mb-7 rounded px-4 py-2  border w-full text-lg placeholder:text-base '
              type="email"
              placeholder='email@exmaple.com'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}

            />

            <h3 className=' text-lg font-medium mb-2 '>Enter  Password </h3>
            <input
              className='bg[#eeeeee]  mb-7 rounded px-4 py-2  border w-full  text-lg placeholder:text-base '
              required type="password"
              placeholder='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}

            />

            <button
              className='bg-[#111] flex itme-center justify-center text-white font-semibold mb-3 rounded px-4 py-2  border w-full  text-lg placeholder:text-base '>
              Create Captain account  </button>
            <p className='text-center-align'> Allready have a account ? <Link to='/captainLogin' className='text-blue-600'>Login here</Link></p>
          </form>
        </div>
        <div>
          <p className='text-[15px] leading-tight'>This site is protected  by reCAPTCHA and the
            <span className='underline'> Google Privacy Policy</span> and Terms of Service apply.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CaptainSignup
