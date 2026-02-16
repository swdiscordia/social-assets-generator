import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import './index.css'

fetch('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap')
  .then(r => r.text())
  .then(css => {
    const style = document.createElement('style')
    style.textContent = css
    document.head.appendChild(style)
  })
  .catch(() => {})

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
