import React, { useState } from "react";
import { state } from "../../../store";
import { useSnapshot } from "valtio";
import "react-dropdown/style.css";
import Drop from "./Drop";
import { MdSpeed } from "react-icons/md";
import { CgSize } from "react-icons/cg";
import { BsGooglePlay } from "react-icons/bs";
import { TbBinaryTree } from "react-icons/tb";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InsertinHeap } from "./Heap";

function Buttons({ heapdata, setHeapdata }) {
  const [rangeValue, setRangeValue] = useState(20);
  const [speedValue, setSpeedValue] = useState(7);
  const [toinsert, setInsert] = useState("");
  const snap = useSnapshot(state);

  const handleRangeChange = (e) => {
    state.ArraySize = e.target.value;
    setRangeValue(e.target.value);
  };

  const handleSpeedChange = (e) => {
    const minSpeed = 5;
    let maxSpeed = 10;
    const minDelay = state.ArraySize > 80 ? 0 : 15;
    const maxDelay = 1000;

    if (
      state.ArraySize > 80 ||
      (window.innerWidth < 800 && state.ArraySize >= 20)
    ) {
      maxSpeed = 7;
    } else if (
      state.ArraySize < 50 ||
      (window.innerWidth < 800 && state.ArraySize < 15)
    ) {
      maxSpeed = 12;
    }

    const speedValue = parseInt(e.target.value, 10);
    const delay =
      ((maxSpeed - speedValue) / (maxSpeed - minSpeed)) *
        (maxDelay - minDelay) +
      minDelay;

    state.delay = delay;
    setSpeedValue(speedValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (toinsert.length) {
      state.isRunning = true;
      await InsertinHeap(toinsert,heapdata,setHeapdata)
      toast.success("Inserted Successfully")
      setInsert("")
    } else {
      toast.error("Select a value to Insert!");
    }
    state.isRunning = false
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
          {/* <div className="flex-grow h-[40px] max-xl:w-[50%] max-sm:w-[100%] bg-[#FFA800] rounded-lg flex justify-evenly items-center">
            <label
              htmlFor="speed"
              className="block mb-1 text-lg font-medium text-gray-900 dark:text-white"
            >
              <span className="flex justify-center items-center gap-3 ">
                <span className=" text-2xl ">
                  <MdSpeed />
                </span>
                <span>Algo Speed</span>
              </span>
            </label>
            <input
              disabled={state.isRunning}
              id="speed"
              type="range"
              min="5"
              max="10"
              value={speedValue}
              step="1"
              className="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700  max-md:w-[40%]"
              onChange={handleSpeedChange}
            />
          </div> */}
        </div>
        <div className="flex gap-3 flex-grow max-xl:w-[100%] max-sm:flex-col">
          <div className="flex-grow h-[40px] shadow-md max-xl:w-[50%] max-sm:w-[100%]  rounded-lg z-50">
            <Drop />
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
