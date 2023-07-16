import React from "react";
import { MdWindow } from "react-icons/md";
import { TbArrowsDoubleSwNe } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

function Sidenav() {
  return (
    <>
      <div className=" shadow-2xl flex flex-col w-[16rem] h-[100vh] p-5 justify-between">
        <div className="flex flex-col mt-5 gap-4" >
          <h1 className="text-3xl text-purple-700 font-bold">@LUVDOCODE</h1>
          <div className="flex gap-2 items-center text-xl cursor-pointer hover:bg-[#EEEEF4] ] rounded-lg p-2 transition-colors duration-1000">
            <MdWindow />
            <h3>Dashboard</h3>
          </div>
          <div className="flex gap-2 items-center text-xl cursor-pointer hover:bg-[#EEEEF4] rounded-lg p-2 transition-colors duration-1000">
            <TbArrowsDoubleSwNe />
            <h3>Transactions</h3>
          </div>
        </div>
        <div className="flex gap-2 items-center text-xl cursor-pointer hover:bg-[#EEEEF4] rounded-lg p-2 transition-colors duration-1000">
          <BiSupport />
          <h3>Support</h3>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
