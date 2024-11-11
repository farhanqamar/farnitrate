import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'

import AOS from 'aos';
AOS.init();



createRoot(document.getElementById('root')).render(
 <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</StrictMode>
)
