import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Mainarea from './components/Mainarea'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav></Nav>
    <Mainarea></Mainarea>
    </>
  )
}

export default App
