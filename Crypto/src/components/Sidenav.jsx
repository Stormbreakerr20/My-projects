import React from "react";
import { MdWindow } from "react-icons/md";
import { TbArrowsDoubleSwNe } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

function Sidenav({closeDrawer}) {
  return (
    <>
      <div className=" shadow-2xl flex flex-col w-[16rem] h-[100vh] p-5 justify-between">
        <div className="flex flex-col mt-5 gap-4" >
          <h1 className="text-3xl text-purple-700 font-bold">@LUVDOCODE</h1>
          <div className="flex gap-2 items-center text-xl cursor-pointer hover:bg-[#EEEEF4] ] rounded-lg p-2 transition-colors duration-1000">
            <MdWindow />
            <Link to="/" onClick={closeDrawer}><h3 >Dashboard</h3></Link>
          </div>
          <div className="flex gap-2 items-center text-xl cursor-pointer hover:bg-[#EEEEF4] rounded-lg p-2 transition-colors duration-1000">
            <TbArrowsDoubleSwNe />
            <Link to="/transactions" onClick={closeDrawer}><h3>Transaction</h3></Link>
          </div>
        </div>
        <div className="flex gap-2 items-center text-xl cursor-pointer hover:bg-[#EEEEF4] rounded-lg p-2 transition-colors duration-1000">
          <BiSupport />
          <Link to="/support" onClick={closeDrawer}><h3>Support</h3></Link>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
