import React, {useState} from 'react'

const Home = () => {
    const player1 = {
        name: "Rishabh Pant",
        age: 25,
        Role: "WK-Batter"

    }
    const player2 = {
        name: "Sanju Samson",
        age: 24,
        Role: "WK-Batsman"
    }
    const [cricketer, setCricketer] = useState(player1);
    const updateState = () => {
        let nextPlayer;
        if (cricketer.name === "Rishabh Pant") {
            nextPlayer = player2;
        } else {
            nextPlayer = player1;
        }
        setCricketer(nextPlayer)
    }
    return (
        <div style={{"text-align": "center", color:"#873600"}}>
            <h1 style={{color:"Black"}}><i>Sanju Samson</i> replaces to <i>Rishabh Pant</i></h1>
            <h2>Name: {cricketer['name']}</h2>
            <h2>Age: {cricketer['age']}</h2>
            <h2>Role: {cricketer['Role']}</h2>
            <button onClick={updateState} style={{width:"10%", height:"50px", backgroundColor:"#0B5345", color:"white", fontSize:"18px"}}>Update</button> 
        </div>
    )
}

export default Home