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
      </div>
    </>
  );
}

export default Content;
