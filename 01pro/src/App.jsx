import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1)
  }
  function decreaseCount() {
    setCount(count - 1)
  }
  function reset(){
    setCount(0)
  }

  return (
    <>
     <h1>Good morning</h1>
      <button onClick={handleClick}>Count is {count}</button>
      <button onClick={decreaseCount}>Count is {count}</button> 
      <button onClick={reset}>Reset</button>

    </>
  )
}

export default App
