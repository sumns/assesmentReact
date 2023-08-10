import React,{useState} from "react";
import "./App.css";

const countries = [ 
  {
    name : "India" , value : "In" , cities : ['Delhi', 'Mumbai']
  },
  {
    name : "Pak" , value : "pk" , cities : ['Lahor', 'Karachi']
  },
  {
    name : "Bangladesh" , value : "Bg" , cities : ['Dhaka', 'Chittagong']
  }
]

const App = () => {
  const[country , setCountry] = useState({name:"" , value: "" , cities:[]});
  return (
    <div>
      <select value={country} onChange={(e)=> {
        console.log(e.target.value)
        setCountry(e.target.value)
      } }>
        {
        countries.map((item, index)=>{
          return <option value={index}>{item.name}</option>
          
        })}
      </select>

      <select value={country}>
        {countries[country].cities.map((item, index)=>{
          return <option value={index}>{item}</option>
          
        })}
      </select>
    </div>
  );
};

export default App;
