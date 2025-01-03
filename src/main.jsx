import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CVForm from './CVForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CVForm />
  </StrictMode>,
)
