import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <HashRouter base="/Mario-Portfolio-main.jsx/">
        {/* Git hub is not supporting BrowserRouter for pages hosted on gh-pages. */}
{/* <BrowserRouter> */} 
    <App />
 {/* </BrowserRouter> */}
</HashRouter>
)