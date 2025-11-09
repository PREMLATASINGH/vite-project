import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from './Card.jsx';
import Button from './Button.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card />
    <Card/>
    <Button/>
    
  </StrictMode>,
)
