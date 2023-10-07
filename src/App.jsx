import { useState } from 'react'
import { BrowserRouter, Route, Link, Routes, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Help from './pages/Help'
import './App.css'

function App() {

  return (
    <>
      <div className="main-body">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="e-pitaka/" element={<SignIn/>}/>
            <Route path="e-pitaka/sign-up" element={<SignUp/>}/>
            <Route path="e-pitaka/home" element={<Home/>}/>
            <Route path="e-pitaka/help" element={<Help/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
