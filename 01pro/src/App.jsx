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
  function styleChange(){
    document.body.style.backgroundColor="lightblue"
  }
  function styleChange2(){
    document.body.style.backgroundColor="lightgreen"  
  }
  function styleChange1(){
    document.body.style.color="red"  
  }
  function styleChange3(){
    document.body.style.fontSize="20px"  
  }
  
  

  return (
    <>
     <h1>Good morning</h1>
      <button onClick={handleClick}>Count is {count}</button>
      <button onClick={decreaseCount}>Count is {count}</button> 
      <button onClick={reset}>Reset</button>
      <button onClick={styleChange}>Style Change</button>
      <button onClick={styleChange2}>Style Change1</button>
      <button onClick={styleChange1}>Style Change2</button>
      <button onClick={styleChange3}>Style Change3</button>
      
    </>
  )
}

export default App
