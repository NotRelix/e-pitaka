import { useState } from 'react'
import { BrowserRouter, Route, Link, Routes, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import SignIn from './pages/SignIn'
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="e-pitaka/" element={<SignIn/>}/>
          <Route path="e-pitaka/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
