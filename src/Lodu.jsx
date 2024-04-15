import React, { useState } from 'react'

function Lodu() {
    let [moves ,setmoves]=useState({
        blue:0,
        yellow:0,
        green:0,
        red:0
    })
    let [arr,setarr]=useState(["update"])
    let updatearr =()=>{
        setarr((prev)=>{return [...prev," newvalue "]})
    }
    let updateblue=()=>{
        setmoves(
            (prevmoves)=>{ return {...prevmoves,blue:prevmoves.blue + 1}})
      }
      let updateyellow=()=>{
        setmoves(
            (prevmoves)=>{ return {...prevmoves,yellow:prevmoves.yellow + 1}})
      }
      let updategreen=()=>{
        setmoves(
            (prevmoves)=>{ return {...prevmoves,green:prevmoves.green + 1}})
      }
      let updatered=()=>{
        setmoves(
            (prevmoves)=>{ return {...prevmoves,red:prevmoves.red + 1}})
      }
  return (
    <div>
        <p>bord begind!</p>
        <div className='bord'>
            <p>Blue moves: {moves.blue}</p>
            <button onClick={updateblue} style={{backgroundColor:"blue"}}>+1</button>
            <p>Yellow moves : {moves.yellow}</p>
            <button onClick={updateyellow} style={{backgroundColor:"yellow"}}>+1</button>
            <p>Green moves : {moves.green}</p>
            <button onClick={updategreen} style={{backgroundColor:"green"}}>+1</button>
            <p>Red moves : {moves.red}</p>
            <button onClick={updatered} style={{backgroundColor:"red"}}>+1</button>
            <p>{arr}</p>
            <button onClick={updatearr} style={{backgroundColor:"red"}}>update arr</button>
        </div>
    </div>
  )
}

export default Lodu