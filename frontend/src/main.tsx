import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Nav } from './nav/nav.tsx'
import Body from './main/body.tsx'
import './index.css'
import './assets/fonts.css'
import './assets/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <Body />
  </StrictMode>,
)