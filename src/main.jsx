// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './component/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ScrollToTop/>
    <App />
  </BrowserRouter>,
)
