import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { globaStyles } from './styles/global.ts'
import { BrowserRouter } from 'react-router-dom'
import CoffeContextProvider from './context/coffeContext.tsx'

globaStyles()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CoffeContextProvider>
        <App />
      </CoffeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
