import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import OptimizelyProvider from './providers/OptimizelyProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OptimizelyProvider>
      <App />
    </OptimizelyProvider>
  </StrictMode>,
)
