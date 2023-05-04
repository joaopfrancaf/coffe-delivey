import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { globaStyles } from './styles/global.ts'
import { BrowserRouter } from 'react-router-dom'
import CheckoutContextProvider from './context/checkout.tsx'

globaStyles()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CheckoutContextProvider>
        <App />
      </CheckoutContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
