import { useState } from 'react'
import './App.css'
import Nav from './assets/components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sorting from './assets/Pages/Sort/Sorting'
import { ToastContainer } from 'react-toastify';
function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Sorting />}></Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
