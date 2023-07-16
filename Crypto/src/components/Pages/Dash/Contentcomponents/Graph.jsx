import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import Tabarea from "./Tabs";
function Graph() {
  const timestamp = [
    ["7:15 PM", "12:55 AM", "6:35 AM", "12:15 PM", "5:55 PM"],
    ["30th June", "1st July", "3rd July", "7th July", "10th July"],
    ["Jan", "March", "May", "July", "Sept"],
  ];
  const data = [
    {
      label: "1D",
      value: "1D",
      desc: (
        <div className=" w-[max-content] mx-[auto] smd:w-[100%]">
          <img src="/images/graph.svg" className="w-[100%]" alt="" />
          <div className="flex justify-between text-xs text-gray-500 font-medium mt-1 ">
            {timestamp[0].map((value, i) => (
              <span key={i}>{value}</span>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: "1W",
      value: "1W",
      desc: (
        <div className=" w-[max-content] smd:w-[100%] mx-[auto]">
          <img src="/images/graph.svg" className="w-[100%]" alt="" />
          <div className="flex justify-between text-xs text-gray-500 font-medium mt-1">
            {timestamp[1].map((value, i) => (
              <span key={i}>{value}</span>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: "1M",
      value: "1M",
      desc: (
        <div className=" w-[max-content] smd:w-[100%] mx-[auto]">
          <img src="/images/graph.svg" className="w-[100%]" alt="" />
          <div className="flex justify-between text-xs text-gray-500 font-medium mt-1">
            {timestamp[2].map((value, i) => (
              <span key={i}>{value}</span>
            ))}
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="bg-white h-[350px] smd:h-[max-content] w-[50%] mr-3 p-5 mt-5 rounded-lg flex flex-col gap-3 smd:w-[100%]">
        <div className="flex justify-between items-center ">
          <div className="flex flex-col justify-center gap-3 sm:gap-1">
            <span className=" text-sm">Current Price</span>
            <span className="flex items-center gap-1">
              <span className="font-bold text-xl">₹26,670.25</span>
              <span className="text-xs flex items-center text-green-800 font-semibold">
                <BsArrowUpRight />
                <p>0.04%</p>
              </span>
            </span>
          </div>
          <div className="flex gap-3 vsm:gap-1">
            <button className=" flex gap-2 items-center bg-[#5F00D9] hover:bg-purple-900 text-white p-2 vsm:p-1 rounded-lg vsm:text-sm vsm:ml-1">
              <span>
                <BsFillPlusCircleFill />
              </span>
              <span>Buy</span>
            </button>
            <button className=" flex gap-2 items-center bg-[#5F00D9] hover:bg-purple-900 text-white p-2 rounded-lg vsm:text-sm  vsm:p-1 ">
              <span>
                <AiOutlineMinusCircle />
              </span>
              <span>Sell</span>
            </button>
          </div>
        </div>
        <div>
          <Tabarea data={data} />
        </div>
      </div>
    </>
  );
}

export default Graph;
