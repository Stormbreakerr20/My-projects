import './App.css'
import Sidenav from './components/Sidenav'
import Dashboard from './components/Dashboard'

function App() {
  

  return (
    <>
    <div className='flex'>
      <div className=' lg:hidden'>
      <Sidenav/>
      </div>
      <Dashboard />
    </div>
    </>
  )
}

export default App
