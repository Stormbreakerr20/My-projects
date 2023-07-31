import React from 'react'
import CustomBtn from './CustomBtn'
const AIpicker = ({prompt,setPrompt,handleSubmit}) => {
  return (
    <div className="backdrop-blur-sm bg-white/30 rounded-lg w-[200px]  p-2 flex flex-col justify-between ">
      <textarea name="AI" id="AI" cols="10" rows="5" className=' bg-green-100' placeholder='Ask Ai...' onChange={(e)=>setPrompt(e.target.value)}>
      </textarea>
      <div className="flex w-[100%] justify-between">
        <CustomBtn content="Full" HandleClick={()=> handleSubmit('full')} styles={'p-1 rounded-md flex-grow mx-2'}/>
        <CustomBtn content="Logo" HandleClick={()=> handleSubmit('logo')} styles={'p-1 rounded-md flex-grow mx-2'}/>
      </div>
    </div>
  )
}

export default AIpicker