import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import React from 'react'
import { HashRouter } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter >
      <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
        <App />
      </MotionConfig>
    </HashRouter>
  </React.StrictMode>,
)
