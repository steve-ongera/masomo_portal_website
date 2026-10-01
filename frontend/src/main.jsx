import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './assets/js/main.js' // template entry: imports your template CSS/SCSS + bootstrap JS
import App from './App.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>)
