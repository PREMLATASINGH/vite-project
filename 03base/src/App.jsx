import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import image from "./assets/image.jpg";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>hi</h1> 
      <img src={image} alt="description of image" className='image' />
    </>
  )
}

export default App
