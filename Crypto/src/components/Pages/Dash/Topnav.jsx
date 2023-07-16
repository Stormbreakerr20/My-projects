import React from 'react'
import  {FaRegUserCircle} from "react-icons/fa"
import Drawerarea from './Drawerarea'
function Topnav() {
  return (
    <>
        <div className=' h-[100%] flex justify-between items-center w-[80%] mx-[auto] '>
            <div className=' lgm:hidden' ><Drawerarea /></div>
            <h1 className=' text-4xl font-semibold'>Dashboard</h1>
            <FaRegUserCircle className='text-5xl' />
        </div>
    </>
  )
}

export default Topnav