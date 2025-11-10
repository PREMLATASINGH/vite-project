import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
  document.body.style.backgroundColor = 'blue';
  }

  return (
    <>
     <h1>hi everyone</h1>
     <button onClick={handleClick}>Change Background Color</button>
    </>
  )
}
export default App;
