import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import App from './useReducer/App'
import './index.css'
// import App from './useMemo/App'
import { BrowserRouter } from 'react-router-dom'
import App from './api/App'
// import App from './Router/App'
// import App from './useCalback/App'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </React.StrictMode>
)
