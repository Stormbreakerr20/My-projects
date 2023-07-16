import React from "react";
import Value from "./Contentcomponents/Value";
import Graph from "./Contentcomponents/Graph";
import Recent from "./Contentcomponents/Recent";
function Content() {
  return (
    <>
      <div className="w-[80%] mx-[auto] h-[100%]">
        <Value/>
        <div className="flex justify-between smd:flex-col">
          <Graph/>
          <Recent/>
        </div>
        <div className="flex smd:flex-col justify-between">
          <div className="bg-white smd:h-[max-content] h-[120px]  w-[51%] mr-3 p-4 rounded-lg flex flex-col gap-3 smd:w-[100%] mt-3 bg-[url('/images/dot_bg.svg')]">
            <button className="flex bg-[#5F00D9] w-[max-content] p-1  text-white rounded-md text-sm" >Loans</button>
            <p>Learn more about Loans – Keep your Bitcoin, access it’s value without selling it</p>
          </div>
          <div className="bg-white smd:h-[max-content]  w-[49%] h-[120px] p-4 ml-3 rounded-lg flex flex-col gap-3 smd:w-[100%] smd:mx-[auto] mt-3  bg-[linear-gradient(to_right_bottom,rgba(80,29,109,0.8),rgba(54,7,75,0.8)),url('/images/grid_bg.svg')] text-white smd: mb-5 ">
            <button className="flex bg-white w-[max-content] p-1 text-[#5F00D9]  rounded-md text-sm" >Contact</button>
            <p>Learn more about our real estate, mortgage, and  corporate account services</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
