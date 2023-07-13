import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import useDisclosure from "../Hooks/useDisclosure";
import AddAndUpdate from "./AddAndUpdate";
import { toast } from "react-toastify";

function Contactsarea({contacts}) {
  const DeletefromFirebase = async (id)=>{
    try {
        toast.success("Contact Deleted Successfuly");
        await deleteDoc(doc(db,"contacts",id));
      } catch (error) {
        console.log("error");
      }
  }
  const  {Open , isOpen ,Close} = useDisclosure();

  return (
    <>
      <div>
        {contacts.map((value) => (
          <div
            key={value.id}
            className="bg-yellow flex justify-between items-center rounded-md  px-1  my-4 "
          >
            <HiOutlineUserCircle className=" text-5xl text-orange  " />
            <div className=" flex-grow  p-2 ">
              <h2 className=" font-medium ">{value.name}</h2>
              <p className=" text-sm">{value.email}</p>
            </div>
            <div className=" flex text-3xl gap-2  ">
              <RiEditCircleLine onClick={Open} className="cursor-pointer" />
              <AddAndUpdate isUpdate contact={value} isOpen={isOpen} Close = {Close}/> 
              <IoMdTrash className=" text-purple-900 cursor-pointer" onClick={()=>DeletefromFirebase(value.id)}/>
            </div>
          </div>
          
        ))}
      </div>
      
    </>
  );
}

export default Contactsarea;
