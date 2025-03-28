import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// ** Styles
import './index.css'
// ** Main app component
import App from './App.tsx'
// ** React Router
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './App/store.ts'





createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter basename="/Graduation-project-kidney-failure">
          <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>
)
