import React, { useState } from "react";

function EmojiSection({ currentMode, setMode, Bg }) {
  const emoji = ["happy", "smile", "ok", "sad"];
  const Bgemoji = {
    happy: "#628674",
    smile: "#D9C93D",
    ok: "#308E83",
    sad: "rgba(87, 32, 156, 0.65)",
  };

  return (
    <>
      <div
        className={`flex flex-col justify-center items-center h-[100%]`}
      >
        {emoji.map((value, index) => (
          <span
            key={index}
            className="h-[30%] w-[50%] flex justify-center items-center transition-all ease-in-out duration-500 hover:w-[60%]"
          >
            <img
              onClick={() => {
                currentMode === value ? setMode("default") : setMode(value);
              }}
              style={{
                backgroundColor: `${
                  currentMode === value ? Bgemoji[currentMode] : ""
                }`,
                borderRadius: "50%",
              }}
              className=" p-3 h-[80%] w-[100%] cursor-pointer transition-all ease-in-out duration-500 hover:h-[100%] hover:w-[100%]"
              src={`images/${value}_logo.png`}
              alt=""
            />
          </span>
        ))}
      </div>
    </>
  );
}

export default EmojiSection;
