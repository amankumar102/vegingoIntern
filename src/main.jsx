import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, 
  createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Shop from './pages/Shop/Shop.jsx'
import Contact from './pages/Contact/Contact.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='about' element={<About />} />
      <Route path='' element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
