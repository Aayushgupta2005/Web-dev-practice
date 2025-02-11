import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let myProperties1 = {
    name:"Aayush",
    age : 21,
    email: "aayush23014@iiitd.ac.in"
  }
  let myProperties2 = {
    name:"Aayush",
    age : 21,
    email: "aayush23014@iiitd.ac.in"
  }
  let arrProperties = [{myProperties1},{myProperties2}];
  console.log('helllo' , arrProperties[1]);
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 m-4'>Testing react</h1>
      <Card properties={arrProperties[1]}/>
      
    </>
  )
}

export default App
