import React from "react";
import Topnav from "./Topnav";
import Sidenav from "./Sidenav";
function Layout({title,content}) {
  return (
    <>
      <div className=" overflow-y-auto">
        <div className=" lg:hidden fixed">
          <Sidenav />
        </div>
        <div className="lgm:ml-[16rem]">
          <div className="h-[100vh]  w-[100%]">
            <div className="h-[80px] w-[100%]">
              <Topnav title={title} />
            </div>
            <div className="bg-[#EEEEF4] h-[max-content] pt-5 smd:h-[fit-content]">
              {content}
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Layout;
