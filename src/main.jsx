import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App></App>
    </BrowserRouter>
    
  </React.StrictMode>,
)
