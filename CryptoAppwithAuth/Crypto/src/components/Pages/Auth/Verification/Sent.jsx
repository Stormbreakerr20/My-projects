import React from "react";
import {BsPatchCheckFill} from  "react-icons/bs"
import { useParams } from "react-router-dom";
function Sent() {
  const {email} = useParams();

  return (
    <>
      <div className="h-[100svh] w-[100%] flex justify-center items-center">
        <div className="w-[400px] flex flex-col justify-center gap-3 items-center p-5 mx-auto bg-white h-[max-content] rounded-lg vsm:mx-2 vsm:w-[80%]">
          <div className="text-4xl text-green-600">{<BsPatchCheckFill />}</div>
          <div className="text-2xl vsm:text-xl">Successfully Sent</div>
          <p className=" text-center text-sm text-gray-700" >
          We have sent instructions on how to reset your password to 
          <span className="text-black font-semibold mx-1">
            {email}
          </span>
          Please follow the instructions from the email.
          </p>
        </div>
      </div>
    </>
  );
}

export default Sent;
