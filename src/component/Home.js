import React, { useState } from 'react'

const Home = () => {
    const [state, setState] = useState({name:'Virat', email:'virat@viru.com', count:0});

    const updateState = () => {
        try {
            setState({
                name:"Rohit",
                email:'rohit@ro.com',
                count: state.count+1
            })
        } catch (error) {
            setState('errorrr')
        }
    }
  return (
    <div>
        <h1>Count {state.count}</h1>
        <h1>Email {state.email}</h1>
        <button onClick={updateState}>Update</button>
    </div>
  )
}

export default Home