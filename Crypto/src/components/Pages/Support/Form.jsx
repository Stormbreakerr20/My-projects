import React from "react";

import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  surname: Yup.string().required("Surname is required"),
  message: Yup.string().required("Message shall be atleast 30 words").min(30),
  email: Yup.string().email("Invalid Email").required("Email is required"),
});

function Formpart() {

    const clear = (value)=>{
        toast.success("Form Submitted successfuly");
        console.log({"Name":value.name,"Surname":value.surname,"Email": value.email,"Message":value.message});
    }
  return (
    <>
      <div className=" h-[150px] bg-white flex-grow mb-5 p-5 rounded-xl overflow-y-auto">
        <p>You will receive response within 24 hours of time of submit.</p>
        <Formik
          validationSchema={ContactValidationSchema}
          initialValues={{
            name: "",
            email: "",
            surname: "",
            message: "",
          }}
          onSubmit={ (value,helpers)=>{
            clear(value);
            helpers.resetForm();
            }}
        >
          <Form className="flex flex-col h-[150px]">
            <div className="flex gap-2">
              <div  className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <Field name="name" className=" border rounded-lg border-gray-400 p-2 w-[90%] " placeholder="Luv" />
                <div className="text-red-500 text-xs font-medium">
                  <ErrorMessage name="name" />
                </div>
              </div>
              <div  className="flex flex-col gap-2">
                <label htmlFor="surname">Surname</label>
                <Field name="surname" className=" border rounded-lg border-gray-400  p-2 w-[90%] " placeholder="Sharma" />
                <div className="text-red-500 text-xs font-medium">
                  <ErrorMessage name="surname" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                className="  border rounded-lg border-gray-400 p-2 "
                name="email"
                placeholder="name@gmail.com"
              />
              <div className="text-red-500 text-xs font-medium">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div  className="flex flex-col gap-2 mt-2">
                <label htmlFor="message">Message</label>
                <Field name="message" as="textarea" className=" border rounded-lg border-gray-400  p-2 " placeholder="Your Message" />
                <div className="text-red-500 text-xs font-medium">
                  <ErrorMessage name="message" />
                </div>
              </div>
            <div className="flex justify-end mt-5">
              <button className=" bg-dark-yellow p-1 border rounded-lg font-medium ">
                Contact
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default Formpart;
