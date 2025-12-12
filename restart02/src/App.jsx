import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log("component mounted");
  },[count]);

  return (
    <><h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>increment</button>
    <button onClick={()=>setCount(count-1)}>decrement</button>
    
    </>
  )
}

export default App
