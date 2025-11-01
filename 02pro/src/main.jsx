import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Button from './Button.jsx';
import Color from './Color.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Button />
    <Color />
  </StrictMode>,
)
