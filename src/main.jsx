import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'

// GitHub is not supporting BrowserRouter for pages hosted on gh-pages.
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename='/Maria-Portfolio/'>
            <App />
        </BrowserRouter>
    </StrictMode>
)