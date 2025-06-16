import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Nav } from './nav/nav.tsx'
import Body from './main/body.tsx'
import Login from './login/login.tsx'
import Signup from './signup/signup.tsx'
import IPCA from './correction/ipca.tsx'
import './index.css'
import './assets/fonts.css'
import './assets/global.css'

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ipca" element={<IPCA />} />
        </Routes>
      </Router>
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)