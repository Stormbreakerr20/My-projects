import React, { useState } from "react";
import { state } from "../../../store";
import { useSnapshot } from "valtio";
import "react-dropdown/style.css";
import Drop from "./Drop";

function Buttons() {
  const [rangeValue, setRangeValue] = useState(50);
  const [speedValue, setSpeedValue] = useState(7);
  const snap = useSnapshot(state);
  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  const handleRangeChange = (e) => {
    state.ArraySize = e.target.value;
    setRangeValue(e.target.value);
  };

  const handleSpeedChange = (e) => {
    const minSpeed = 5;
    const maxSpeed = 10;
    const minDelay = state.ArraySize > 80 ? 0 : 15;
    const maxDelay = 500;

    const speedValue = parseInt(e.target.value, 10);
    const delay =
      ((maxSpeed - speedValue) / (maxSpeed - minSpeed)) *
        (maxDelay - minDelay) +
      minDelay;

    state.delay = delay;
    setSpeedValue(speedValue);
  };

  return (
    <>
      <div className="flex justify-between w-[100%] gap-8">
        <div className="flex-grow h-[40px] bg-[#FFA800] rounded-lg flex justify-evenly items-center">
          <label
            htmlFor="steps-range"
            className="block mb-1 text-lg font-medium text-gray-900 dark:text-white"
          >
            Array Size
          </label>
          <input
            disabled={state.isSorting}
            id="steps-range"
            type="range"
            min="10"
            max="150"
            value={rangeValue}
            step="5"
            className="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            onChange={handleRangeChange}
          />
        </div>
        <div className="flex-grow h-[40px] bg-[#FFA800] rounded-lg flex justify-evenly items-center">
          <label
            htmlFor="speed"
            className="block mb-1 text-lg font-medium text-gray-900 dark:text-white"
          >
            Algo Speed
          </label>
          <input
            disabled={state.isSorting}
            id="speed"
            type="range"
            min="5"
            max="10"
            value={speedValue}
            step="1"
            className="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            onChange={handleSpeedChange}
          />
        </div>
        <div className="flex-grow h-[40px] w-[5%] rounded-lg">
          <Drop />
        </div>
      </div>
    </>
  );
}

export default Buttons;
