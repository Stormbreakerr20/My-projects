import React from "react";

function RTcontent({head,bottom,amt,icon}) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="text-xl bg-[#EEEEF4] rounded-full p-2">
          {icon}
        </div>
        <div className="flex-grow flex justify-between">
          <div className="flex flex-col ml-2 ">
            <span className=" font-semibold">{head}</span>
            <span className="text-xs">{bottom}</span>
          </div>
          <div className=" font-semibold vsm:text-sm">{amt}</div>
        </div>
      </div>
    </>
  );
}

export default RTcontent;
