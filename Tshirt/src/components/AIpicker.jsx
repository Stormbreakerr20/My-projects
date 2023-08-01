import React from "react";
import CustomBtn from "./CustomBtn";
import ClipLoader from "react-spinners/ClipLoader";
import { state } from "../store";
import { getContrastingColor } from "../config/helpers";
const AIpicker = ({ prompt, setPrompt, handleSubmit, generatingImg }) => {
  return (
    <div className="backdrop-blur-sm bg-white/30 rounded-lg w-[200px]  p-2 flex flex-col justify-between ">
      <textarea
        name="AI"
        id="AI"
        cols="10"
        rows="5"
        className=" bg-green-100"
        placeholder="Ask Ai..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>
      <div className="flex w-[100%] justify-between">
        {generatingImg ? (
          <div className="flex gap-2 justify-center items-center w-[100%] rounded-lg" style={{backgroundColor:state.color,color:getContrastingColor(state.color)}}>
            <span>
              <ClipLoader
                color={getContrastingColor(state.color)}
                loading={generatingImg}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
                className="mt-2"
              />
            </span>
            <span>Asking AI...</span>
          </div>
        ) : (
          <>
            <CustomBtn
              content="Full"
              HandleClick={() => handleSubmit("full")}
              styles={"p-1 rounded-md flex-grow mx-2"}
            />
            <CustomBtn
              content="Logo"
              HandleClick={() => handleSubmit("logo")}
              styles={"p-1 rounded-md flex-grow mx-2"}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIpicker;
