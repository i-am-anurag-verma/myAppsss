import React from 'react'
import { useState } from 'react'
import Button from './Button'
import './login.css'



const Login = () => {

  const [data, setData] = useState()

  const handleOnchange = (event) => {
    setData(event.target.value)

    console.log("========>", event)
  }

  return (
    <div className='control_login'>
      <h2>Login to Continue</h2>
      <div>
        <label form='name'>Email Id</label>
        <input type="email" name="email" className='control_input' placeholder='Email Id'/>
      </div>
      <div>
        <label form='name'>Password</label>
        <input type="password" name="password" className='control_input' placeholder='Password'/>
      </div>
      <Button>Submit</Button>
    </div>
  )
}

export default Login;