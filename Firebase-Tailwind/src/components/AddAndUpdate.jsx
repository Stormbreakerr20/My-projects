import React from "react";
import Modal from "./Modal";
import { Field, Form, Formik,ErrorMessage } from "formik";

import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";

import * as Yup from "yup";

const ContactValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
})

function AddAndUpdate({ isOpen, Close, isUpdate, contact }) {
  const Addtofirebase = async (contact) => {
    try {
      const contactsRef = collection(db, "contacts"); // id name that was contact is this should match thats why contact
      toast.success("Contact Added Successfuly");
      await addDoc(contactsRef, contact);
      Close();
    } catch (error) {
      console.log("error");
    }
  };
  const Update = async (val, id) => {
    try {
      const contactsRef = doc(db, "contacts", id);
      toast.success("Contact Updated Successfuly");
      await updateDoc(contactsRef, val);
      Close();
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} Close={Close}>
        <div className=" h-[150px] ">
          <Formik
          validationSchema={ContactValidationSchema}


            initialValues={
              isUpdate
                ? {
                    name: contact.name,
                    email: contact.email,
                  }
                : {
                    name: "",
                    email: "",
                  }
            }
            onSubmit={(values) => {
              isUpdate ? Update(values, contact.id) : Addtofirebase(values);
            }}
          >
            <Form className="flex flex-col h-[150px]">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <Field name="name" className=" border p-2 " />
                <div className="text-red-500 text-xs font-medium">
                <ErrorMessage  name="name" />
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="email">Email</label>
                <Field type="email" className=" border p-2 " name="email" />
                <div className="text-red-500 text-xs font-medium">
                <ErrorMessage  name="email" />
                </div>
              </div>
              <div className="flex justify-end mt-5">
                <button className=" bg-dark-yellow p-1 border rounded-lg font-medium ">
                  {isUpdate ? "Update" : "Add"} Contact
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </Modal>
    </>
  );
}

export default AddAndUpdate;
