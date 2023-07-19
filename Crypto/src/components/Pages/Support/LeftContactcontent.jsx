import React from "react";
import {AiTwotoneMessage} from "react-icons/ai"
import {BsFillEnvelopeFill} from "react-icons/bs"
function LeftContactcontent() {
  return (
    <>
      <div className="flex flex-col justify-between w-[50%] h-[90%] rescontact:w-[100%] rescontact:gap-5">
        <span className="flex flex-col gap-3">
          <span className="text-2xl text-purple-900">
            {<BsFillEnvelopeFill />}
          </span>
          <h1 className="text-4xl font-semibold">Contact Us</h1>
          <p>
            Have a question or just want to know more? Feel free to reach out to
            us.
          </p>
        </span>
        <span className="flex flex-col gap-3">
          <span className="text-2xl text-purple-900">
            {<AiTwotoneMessage />}
          </span>
          <h1 className="text-4xl font-semibold">Live Chat</h1>
          <p>Don’t have time to wait for the answer? Chat with us now.</p>
        </span>
      </div>
    </>
  );
}

export default LeftContactcontent;
