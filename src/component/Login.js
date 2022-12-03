import React from 'react'
import { useState } from 'react'
import Button from './Button'

const arr = []
const Login = () => {

  const [data, setData] = useState()

  const handleOnchange = (event) =>{
      setData(event.target.value)

        console.log("========>",event)
  }
  
  return (
   <div>
    <label form='name'>Array:</label>
    <input type="text" name="Array" onChange={(event)=>{handleOnchange(event)}} />   
    <Button>Submit</Button>
   </div>
  )
}

export default Login;