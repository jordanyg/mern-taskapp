import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import store from './store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <App />
      </div>
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
