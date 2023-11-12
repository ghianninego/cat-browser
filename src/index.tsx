import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './app'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'src/styles/globals.css'

const rootElement = document.getElementById('root')

if (rootElement === null) {
  throw Error('root element not found')
}

const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
