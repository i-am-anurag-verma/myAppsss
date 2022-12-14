import React from 'react';
import { useState, useEffect } from 'react';
import Button from './Button';
import Signup from './Signup';
import Login  from './Login'
import './home.css'

const Home = () => {
  const [isSignedUp, setIsSignedUp] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if(isLoggedIn){
      setIsSignedUp(false)
    }
  }, [isLoggedIn]);

  useEffect(() => {
   if(isSignedUp){
    setIsLoggedIn(false)
   }
  }, [isSignedUp]);
  
  

  return (
    <div className='form'>
        <h1><a href='/home'>Home</a></h1>
        <div className='flex'>
        <Button className='flex-child' onclick={()=>setIsSignedUp(!isSignedUp)} isDisabled={isSignedUp}>Signup</Button>
        <Button className='flex-child' onclick={()=>setIsLoggedIn(!isLoggedIn)} isDisabled={isLoggedIn}>Login</Button>
        </div>
        {isSignedUp &&(
          <Signup />
        )}

        {isLoggedIn && (
            <Login />
          )}
    </div>
  )
}

export default Home