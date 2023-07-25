import React from "react";
import LeftContactcontent from "./LeftContactcontent";
import ContactForm from "./ContactForm";

function SupportContent() {
  return (
    <>
      <div className="w-[80%] mx-[auto] h-[calc(100vh-100px)]">
        <div className=" flex h-[95%] gap-2 rescontact:flex-col rescontact:gap-5">
          <LeftContactcontent />
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default SupportContent;
