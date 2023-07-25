import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { EmailforPassword } from "../../../../api/Query/userQuery";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";

const ContactValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required"),
});

function Forgotpassword() {
  const [email,setEmail] = useState("");
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationKey: ["Email-for-Passoword-Forgot"],
    mutationFn: EmailforPassword,
    onSuccess: (data) => {
      console.log(data)

      navigate(`/sent/${email}`);
    },
    onError:(error)=>{
      toast.error(error.message)
    }
  });
  return (
    <>
      <div className="h-[100svh] w-[100%] flex justify-center items-center">
        <div className="w-[400px] flex flex-col gap-3  p-5 mx-auto bg-white h-[max-content] rounded-lg vsm:mx-2 vsm:w-[80%]">
          <Link to="/" className="text-2xl text-black w-[100%]">
            {<AiOutlineArrowLeft />}
          </Link>
          <div className="text-2xl">Forgot Password</div>
          <p className=" text-sm text-gray-700">
            Enter your email address for which account you want to reset your
            password.
          </p>
          <div>
            <Formik
              validationSchema={ContactValidationSchema}
              initialValues={{
                email: "",
              }}
              onSubmit={async(values) => {
                await setEmail(values.email);
                mutate(values);
              }}
            >
              <Form className="flex flex-col h-[max-content]">
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
                <div className="flex mt-5 w-[100%]">
                  <button
                    type="submit"
                    className=" flex justify-center items-center gap-2 bg-dark-yellow p-1 border rounded-lg font-medium w-[100%] mb-5 cursor-pointer hover:bg-blue-gray-300 transition-colors duration-700 "
                  >
                    <span className="pt-1">
                      {" "}
                      <ClipLoader
                        color="purple"
                        loading={isLoading}
                        size={20}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
                    </span>
                    <span>Reset Password</span>
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgotpassword;
