import React from "react";
import { MdWindow } from "react-icons/md";
import { TbArrowsDoubleSwNe } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

function Sidenav({ closeDrawer }) {
  return (
    <>
      <div className=" shadow-2xl  w-[16rem] flex flex-col justify-between p-5 bg-white h-[100svh]">
        <div className="flex flex-col mt-5 gap-4">
          <h1 className="text-3xl text-purple-700 font-bold">@LUVDOCODE</h1>
          <div className=" text-xl cursor-pointer hover:bg-[#EEEEF4] ] rounded-lg p-2 transition-colors duration-1000">
            <Link
              to="/dash"
              onClick={closeDrawer}
              className="flex gap-2 items-center"
            >
              <MdWindow />
              <h3>Dashboard</h3>
            </Link>
          </div>
          <div className="flex gap-2 items-center text-xl cursor-pointer hover:bg-[#EEEEF4] rounded-lg p-2 transition-colors duration-1000">
            <Link
              to="/transactions"
              onClick={closeDrawer}
              className="flex gap-2 items-center"
            >
              <TbArrowsDoubleSwNe />
              <h3>Transaction</h3>
            </Link>
          </div>
        </div>
        <div className=" text-xl cursor-pointer hover:bg-[#EEEEF4] rounded-lg p-2 transition-colors duration-1000 ">
          <Link
            to="/support"
            onClick={closeDrawer}
            className="flex gap-2 items-center"
          >
            <BiSupport />
            <h3>Support</h3>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
