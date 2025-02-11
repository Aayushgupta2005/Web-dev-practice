import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0);
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button 
      onClick={() =>{
        // console.log("Clicked",counter);
        setCounter(counter+1);
      }}
      >Add value {counter}</button>
      <br />
      <button
      onClick={()=>{
        if(counter>0){
          setCounter(counter-1);
        }
      }}
      >Remove value {counter}</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
