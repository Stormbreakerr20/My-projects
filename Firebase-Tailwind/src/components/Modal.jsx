import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

function Modal({ isOpen, Close, children }) {
  return createPortal(
    <>
      {isOpen && (<div className="absolute top-0 z-40 grid h-screen w-screen place-items-center backdrop-blur">
        <div className="relative z-50 m-auto min-h-[310px] rounded-lg min-w-[80%] bg-white p-4">
          <div className="flex justify-end">
            <AiOutlineClose onClick={Close} className="text-2xl cursor-pointer" />
          </div>
          {children}
        </div>
      </div>)}
    </>,
    document.getElementById("root-modal")
  );
}

export default Modal;
