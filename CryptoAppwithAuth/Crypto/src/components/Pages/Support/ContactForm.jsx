import React from 'react'
import Form from './Form'
function ContactForm() {
  return (
    <>
        <div className='flex flex-col justify-between w-[50%] rescontact:w-[100%]'>
            
            <Form/>
            <div className="bg-white smd:h-[max-content] h-[120px] p-4 rounded-lg flex flex-col gap-3 smd:w-[100%] smd:mx-[auto] mt-3 rescontact:  bg-[linear-gradient(to_right_bottom,rgba(80,29,109,0.8),rgba(54,7,75,0.8)),url('/images/grid_bg.svg')] text-white smd: mb-5 ">
            <button className="flex bg-white w-[max-content] p-1 text-[#5F00D9]  rounded-md text-sm" >Chat-Bot</button>
            <p>Chat with us now</p>
          </div>
        </div>
    </>
  )
}

export default ContactForm