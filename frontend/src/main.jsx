import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {Home,Events, Members,Aboutus} from "./components/index.js"
import { Route,RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />} >
    <Route path="" element={<Home />} />

  <Route path='events' element={<Events/>}/>
  
  {/* <Route path='members' element={<Members/>}/> */}
  <Route path='aboutus' element={<Aboutus/>}/>
  </Route>

))

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
