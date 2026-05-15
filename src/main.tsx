import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter >
      <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
        <App />
      </MotionConfig>
    </BrowserRouter>
  </React.StrictMode>,
)
