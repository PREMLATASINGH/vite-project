import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount((count) => count + 1)
  }
  function handleClick2() {
    setCount((count) => count -1)
  }
  function time() {
    const date = new Date()
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    return date.toLocaleString('en-US', { timeZone })
  }

  return (
    <><h1>time zone</h1>
    
      <div>{time()}</div>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        <button onClick={handleClick2}>decrease count is {count}</button>
      </div>  
      
    </>
  )
}

export default App
