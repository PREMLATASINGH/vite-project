import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import List from './List.jsx'
import Heading from '../src/heading.jsx'
import '/src/style.css'


createRoot(document.getElementById('root')).render(
  <strictMode>
   <Heading/>
      <List/>
  </strictMode>
)
