import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Drawerarea from "./Drawerarea";
import { Link } from "react-router-dom";

function Topnav({ title }) {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div className=" h-[100%] flex justify-between items-center w-[80%] mx-[auto] ">
        <div className=" lgm:hidden">
          <Drawerarea />
        </div>
        <h1 className=" text-4xl font-semibold px-2">{title}</h1>
        <div className="flex justify-center items-center gap-2">
          <FaRegUserCircle className="text-5xl cursor-pointer" onClick={()=>setVisible((prev)=>!prev)} onMouseOver={()=>setVisible((prev)=>!prev)} />
          <div className="flex flex-col" >
            <Link to="/" hidden={visible}>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-green-400 w-[100%] via-green-500 to-green-600 hover:bg-gradient-to-br hover:bg-gray-400 focus:text-black focus:outline-none  font-medium rounded-lg text-xs px-2 py-1 text-center mr-2 mb-2"
              >
                Logout
              </button>
            </Link>
            <Link to="/support" hidden={visible}>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-purple-500 w-[100%] via-purple-600 to-purple-700 hover:bg-gradient-to-br hover:bg-gray-200 focus:text-black focus:outline-none  font-medium rounded-lg text-xs px-2 py-1 text-center mr-2 mb-2"
              >
                Support
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topnav;
