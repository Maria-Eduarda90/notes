import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import { Toaster } from 'sonner';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toaster richColors />
  </StrictMode>,
)
