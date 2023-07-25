import React from 'react'
import {AiOutlineDownload} from "react-icons/ai"
import Detalis from './Detalis'
function TransactContent() {
  return (
    <>
        <div className='w-[80%] mx-[auto] h-[calc(100vh-100px)]'>
            <div className='flex justify-end'>
                <button className=" flex gap-2 items-center bg-[#5F00D9] hover:bg-purple-900 text-white p-2 rounded-lg ">
                    <span ><AiOutlineDownload/></span>
                    <span>Export</span>
                </button>
            </div>
            <div className='my-4'>
              <Detalis/>
            </div>
            
        </div>
    </>
  )
}

export default TransactContent