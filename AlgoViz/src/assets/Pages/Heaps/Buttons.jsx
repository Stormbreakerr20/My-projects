import React, { useState } from "react";
import { state } from "../../../store";
import { useSnapshot } from "valtio";
import "react-dropdown/style.css";
import Drop from "./Drop";
import { BsGooglePlay } from "react-icons/bs";
import { TbBinaryTree } from "react-icons/tb";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MinHeapInsert, MaxHeapInsert } from "./Heap";

function Buttons({ heapdata, setHeapdata }) {
  const [toinsert, setInsert] = useState("");
  const snap = useSnapshot(state);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(state.AlgoSelected !== "Min Heap" && state.AlgoSelected !== "Max Heap") toast.error("Select an algorithm")

    else if (heapdata.length > 15) toast.error("Max limit reached!");
    else if (toinsert.length) {
      state.isRunning = true;
      if(state.AlgoSelected === "Min Heap") await MinHeapInsert(toinsert, heapdata, setHeapdata);
      else if(state.AlgoSelected === "Max Heap") await MaxHeapInsert(toinsert, heapdata, setHeapdata);
      toast.success("Inserted Successfully");
      setInsert("");
    } else {
      toast.error("Select a value to Insert!");
    }
    state.isRunning = false;
  };

  const handleChange = (e) => {
    setInsert(e.target.value);
  };

  return (
    <>
      <div className="flex justify-between w-[100%] gap-3 max-xl:flex-col max-xl:w-[80%] max-[880px]:w-[100%]">
        <div className="flex flex-grow gap-3 shadow-md max-xl:w-[100%] max-sm:flex-col">
          <div className="flex-grow w-[40%] h-[40px] max-xl:w-[50%] max-sm:w-[100%] bg-[#FFA800] rounded-lg flex justify-center gap-3 items-center">
            <label
              htmlFor="speed"
              className="block mb-1 text-lg font-medium text-gray-900 dark:text-white"
            >
              <span className="flex justify-center items-center gap-3 ">
                <span className=" text-2xl ">
                  <TbBinaryTree />
                </span>
                <span>Insert Element: </span>
              </span>
            </label>
            <form
              action=""
              className="flex w-[40%] gap-1 justify-center items-center"
            >
              <input
                disabled={state.isRunning}
                type="number"
                className="h-2 w-[60%] bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700   max-md:w-[40%] p-3"
                onChange={handleChange}
                value={toinsert}
              />
              <button
                type="submit"
                className="mx-1 bg-black text-sm text-white px-2 py-1 rounded-md"
                onClick={handleSubmit}
                disabled={state.isRunning}
              >
                Insert
              </button>
            </form>
          </div>
        </div>
        <div className="flex gap-3 flex-grow max-xl:w-[100%] max-sm:flex-col">
          <div className="flex-grow h-[40px] shadow-md max-xl:w-[50%] max-sm:w-[100%]  rounded-lg z-50">
            <Drop setheapdata={setHeapdata} />
          </div>
          <div className="px-2 max-sm:w-[100%] flex-grow shadow-md h-[40px] bg-[#FFA800] rounded-lg flex justify-evenly items-center max-xl:w-[50%]">
            <span className="flex justify-center items-center gap-3 mb-1  text-lg font-medium text-gray-900 cursor-pointer">
              <span>{state.isRunning ? "Inserting" : "Start"}</span>
              <span className={`text-lg ${state.isRunning ? "blinking" : ""}`}>
                <BsGooglePlay />
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Buttons;
