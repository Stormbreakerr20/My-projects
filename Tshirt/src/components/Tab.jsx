import React from "react";
import { useSnapshot } from "valtio";
import { state } from "../store";

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state)
  return (
    <>
      <div
        onClick={handleClick}
        className={`${
          isActiveTab && isFilterTab
            ? `rounded-full bg-[#EFBD48]`
            : "bg-transparent"
        } cursor-pointer`}
        style={isActiveTab && isFilterTab?{backgroundColor:snap.color}:{}}

      >
        <img src={tab.icon} alt="" className="h-12 w-12 m-2" />
      </div>
    </>
  );
};

export default Tab;
