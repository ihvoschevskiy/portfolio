import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './App'

const rootElement = document.getElementById('root')

if (!rootElement) throw new Error('root element not found')
const root = createRoot(rootElement)

root.render(
  <Router>
    <App />
  </Router>,
)
