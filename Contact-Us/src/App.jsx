import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Navbar/Nav'
import Contact from './components/Contact/Contact'
function App() {

  return (
    <>
    <Nav></Nav>
    <main className="maincont">
      <Contact></Contact>
      <img src="/images/contact.svg" alt="" />
    </main>
    </>
  )
}

export default App
