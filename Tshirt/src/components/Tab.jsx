import React from "react";
import { useSnapshot } from "valtio";
import { state } from "../store";

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state)
  console.log(isActiveTab)
  return (
    <>
      <div
        onClick={handleClick}
        className="rounded-lg  "
        style={isActiveTab?{backgroundColor:snap.color}:{}}
      >
        <img src={tab.icon} alt="" className="h-12 w-12 m-2" />
      </div>
    </>
  );
};

export default Tab;
