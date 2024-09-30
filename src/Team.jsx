import { useState } from "react"

export default function Team(){
    const [players,setPlayers]=useState(11);
    const addPlayers=()=>{
        setPlayers(players+1);
    }
    const removePlayers=()=>{
        setPlayers(players-1);
    }

    const teamStyle={
        border:'1px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }
    return(
        <div style={teamStyle}>
            <h3>Players: {players}</h3>
            <button onClick={addPlayers} className="mr-5">Add Players</button>
            <button onClick={removePlayers}>Remove Players</button>
        </div>
    )
}