import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// ** Styles
import './index.css'
// ** Main app component
import App from './App.tsx'
// ** React Router
import { BrowserRouter } from 'react-router-dom'





createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/Graduation-project-kidney-failure">
        <App />
    </BrowserRouter>
  </StrictMode>,
)
