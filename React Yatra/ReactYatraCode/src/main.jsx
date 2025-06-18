import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppLayoutEffect from './AppLayoutEffect'
import Lazy from './Lazy'
import ContextApi from './ContextApi'
createRoot(document.getElementById('root')).render(
        <ContextApi/>
)
