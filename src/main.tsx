import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { globaStyles } from './styles/global.ts'
import { BrowserRouter } from 'react-router-dom'
import CoffeContextProvider from './context/coffeContext.tsx'
import CheckoutContextProvider from './context/checkoutContext.tsx'

globaStyles()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CoffeContextProvider>
        <CheckoutContextProvider>
          <App />
        </CheckoutContextProvider>
      </CoffeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
