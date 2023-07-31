import React from "react";
import CustomBtn from "./CustomBtn";
const Filepicker = ({ setFile, readfile }) => {
  return (
    <div className="backdrop-blur-sm bg-white/30 rounded-lg w-[200px]  p-2 flex flex-col justify-between ">
      <div className="flex flex-col gap-3 ">
        <label htmlFor="file">Upload File</label>
        <input type="file" name="file" id="file" accept="image/" onChange={(e)=>setFile(e.target.files[0])} className="text-xs "/>
      </div>
      <div className="flex w-[100%] justify-between">
        <CustomBtn content="Full" HandleClick={()=> readfile("full")} styles={'p-1 rounded-md flex-grow mx-2'}/>
        <CustomBtn content="Logo" HandleClick={()=> readfile("logo")} styles={'p-1 rounded-md flex-grow mx-2'}/>
        
      </div>
    </div>
  );
};

export default Filepicker;
