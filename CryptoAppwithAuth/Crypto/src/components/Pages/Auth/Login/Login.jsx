import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { signinUser } from "../../../../api/Query/userQuery";
import ClipLoader from "react-spinners/ClipLoader";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password should be of min 8 characters")
    .min(8),
  email: Yup.string().email("Invalid Email").required("Email is required"),
});

function Login({setToken}) {
  const navigate = useNavigate();
  

  const { mutate, isLoading, error, isError } = useMutation({
    mutationKey: ["login"],
    mutationFn: signinUser,
    onSuccess: (data) => {
      console.log(data);
      setToken(data.token);
      navigate("/dash");
      toast.success("Logged-In successfully");
    },
    onError: (error) => {
      toast.error(`Login Error: ${error.message}`);
    },
  });

  return (
    <>
      <div className="w-[400px] p-5 mx-auto bg-white h-[max-content] mt-[2rem] rounded-lg vsm:h-[100svh] vsm:mt-0 vsm:w-[100%] vsm:flex vsm:flex-col vsm:justify-center">
        <div>
          <h1 className=" text-3xl vsm:text-2xl">Welcome To Crypto App</h1>
        </div>
        <div>
          <p className="text-xs text-gray-500 my-3">
            Create a free account by filling data below.
          </p>
        </div>
        <div>
          <Formik
            validationSchema={ContactValidationSchema}
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
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

              <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  className="  border rounded-lg border-gray-400 p-2 "
                  name="password"
                  placeholder="Enter your password"
                />
                <div className="text-red-500 text-xs font-medium">
                  <ErrorMessage name="password" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 mt-2">
                  <Field type="checkbox" name="checkbox" />
                  <label htmlFor="checkbox">Remember me</label>
                  <div className="text-red-500 text-xs font-medium">
                    <ErrorMessage name="checkbox" />
                  </div>
                </div>
                <Link
                  to="/forgot"
                  className="mt-2 text-sm text-purple-800 cursor-pointer"
                >
                  Forgot Password ?
                </Link>
              </div>

              <div className="flex justify-end mt-5">
                <button
                  type="submit"
                  className="flex justify-center items-center gap-2 bg-dark-yellow p-1 border rounded-lg font-medium w-[100%] mb-5 cursor-pointer hover:bg-blue-gray-300 transition-colors duration-700 "
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
                  <span>Log In</span>
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="flex justify-end">
          <Link
            to="/signup"
            className=" flex justify-center bg-dark-yellow p-1 border rounded-lg font-medium w-[100%] mb-5 cursor-pointer hover:bg-blue-gray-300 transition-colors duration-700 "
          >
            Create a new Account
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
