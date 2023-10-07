import { useState } from 'react'
import { BrowserRouter, Route, Link, Routes, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import './App.css'


function App() {

  return (
    <>
      <div className="main-body">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="e-pitaka/" element={<SignIn/>}/>
            <Route path="e-pitaka/sign-up" element={<SignUp/>}/>
            <Route path="e-pitaka/home" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
