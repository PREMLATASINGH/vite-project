import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
  document.body.style.backgroundColor = 'blue';
  }
  function handleClick1(){
    document.body.style.backgroundColor = 'red';
  }
  function handleClick2(){
    document.body.style.color = 'green';
  }
  function handleClick3(){
    document.body.style.fontSize = '20px';
  }
  
 

  return (
    <>
     <h1>hi everyone</h1>
     <p>I am prema .I am frontend developer.</p>
     <button onClick={handleClick}>Change Background Color</button>
      <button onClick={handleClick1}>Change Background Color</button>
      <button onClick={handleClick2}>Change Text Color</button>
      <button onClick={handleClick3}>Change Text Box Color</button>
     
    </>
  )
}
export default App;
