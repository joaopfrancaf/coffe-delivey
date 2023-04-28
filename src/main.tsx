import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { globaStyles } from './styles/global.ts'

globaStyles()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
