import React from 'react'
import {AiOutlineUpload,AiOutlineDownload} from "react-icons/ai"

function Value() {
  return (
    <div id="top" className=" bg-white flex justify-between h-[max-content] rounded-lg items-center p-3 md:flex-col ">
          <div className="flex  p-3 gap-5 sm:flex-col sm:gap-3">
            <div className="flex flex-col items-center justify-center gap-3 sm:gap-1">
              <span  className=" text-xs">Total Portfolio Value</span>
              <span className="font-bold">₹ 112,312.24</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 sm:gap-1">
              <span className=" text-xs">Wallet Balances</span>
              <div>
                <span className="font-bold">22.39401000</span> <span className=" text-xs bg-blue-gray-100 rounded-md h-[max-content] p-1">BTC</span>
              </div>
            </div>
            <div className=" flex gap-1 items-end justify-center">
                <span className="font-bold">₹ 1,300.00</span> <span className=" text-xs bg-blue-gray-100 rounded-md h-[max-content] p-1 ">INR</span>      
            </div>
          </div>

          <div className="flex gap-3">
            <button className=" flex gap-2 items-center bg-[#5F00D9] hover:bg-purple-900 text-white p-2 rounded-lg vsm:text-sm"><span className=" text-lg">{<AiOutlineDownload/>}</span><span>Deposit</span></button>
            <button  className=" flex gap-2 items-center bg-[#5F00D9] hover:bg-purple-900 text-white p-2 rounded-lg vsm:text-sm"><span className=" text-lg"><AiOutlineUpload/></span><span>Withdraw</span></button>
          </div>
        </div>
  )
}

export default Value