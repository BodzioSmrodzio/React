import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Form from './Form.jsx'
import { BrowserRouter } from 'react-router-dom' 

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Routes>
        <Route index element={<App />} />
        <Route path="/form" element={<Form />} />
      </Routes>
  </BrowserRouter>,
)
