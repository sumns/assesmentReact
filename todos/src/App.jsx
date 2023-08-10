
import React,{useState} from "react";
import "./App.css";

const options = ['cricket', 'football', 'hockey'];
const days = ['weekday', 'weekend'];


export default function App() {
  const[game, setGame] = useState()
  const[day, setDay] = useState()
  return (
    <div>
      <h2>Which Game</h2>
      {options.map((curVal)=>{
        console.log(curVal)
        return(
          <>
          <input type="radio" id="{curVal}" name="options" value={curVal} onChange = {(e)=>setDay(e.target.value)} />

          <label htmlFor="curVal">{curVal}</label>
          <br/>
          </>
        )
      })}
      <h2>select days</h2>
      {days.map((curVal)=>{
        console.log(curVal)
        return(
          <>
          <input type="radio" id="{curVal}" name="day" value={curVal} onChange = {(e)=>setGame(e.target.value)} />

          <label htmlFor="curVal">{curVal}</label>
          <br/>
          </>
        )
      })}

      <h2>you will play</h2>
      <p>{day} on {game}</p>

    </div>
  );
}
