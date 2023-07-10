import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartGame from './components/StartGame'
import PlayGame from './components/PlayGame'
function App() {
    const [Gamestarted , setGamestarted] = useState(false);

    const toggleGame =()=>{
      setGamestarted( (prev) => !(prev) );
    }

  return (
    <>
     {Gamestarted ? <PlayGame/> : <StartGame toggle={toggleGame}/>}
    </>
  )
}

export default App
