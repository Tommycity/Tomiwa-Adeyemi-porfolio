import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import 'iconify-icon' // Register web components globally
import faviconUrl from './images/Josh1 - Copy.jpg'

const faviconLink = document.querySelector('link[rel="icon"]')
if (faviconLink) {
  faviconLink.href = faviconUrl
  faviconLink.type = 'image/jpeg'
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)