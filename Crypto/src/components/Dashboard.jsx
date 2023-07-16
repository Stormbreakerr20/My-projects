import React from "react";
import Topnav from "./Pages/Dash/Topnav";
import Content from "./Pages/Dash/Content";
function Dashboard() {
  return (
    <>
      <div className="h-[100vh]  w-[100%]">
        <div className="h-[80px] w-[100%]">
          <Topnav />
        </div>
        <div className="bg-[#EEEEF4] h-[calc(100vh-80px)] pt-5 smd:h-[fit-content]"><Content /></div>
      </div>
    </>
  );
}

export default Dashboard;
