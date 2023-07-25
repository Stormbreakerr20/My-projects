import React, { useEffect, useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { signupUser } from "../../../../api/Query/userQuery";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";

const ContactValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  surname: Yup.string().required("Surname is required"),
  password: Yup.string()
    .required("Password should be of min 8 characters")
    .min(8),
  resetpassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  checkbox: Yup.boolean()
    .oneOf([true], "You need to accept the terms and conditions")
    .required("You need to accept the terms and conditions"),
});

function Signup() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const { mutate, isLoading } = useMutation({
    mutationKey: ["Signup"],
    mutationFn: signupUser,
    onSuccess: () => {
      if (email !== "") {
        navigate(`/email-registration/${email}`);
      }
    },
    onError: (error) => {
      toast.error(`Sign-Up Error: ${error.message}`);
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
              name: "",
              email: "",
              surname: "",
              password: "",
              resetpassword: "",
              checkbox: false,
            }}
            onSubmit={async (value) => {
              await setEmail(value.email);

              mutate({
                firstName: value.name,
                lastName: value.surname,
                email: value.email,
                password: value.password,
              });
            }}
          >
            {() => (
              <Form className="flex flex-col h-[max-content]">
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <Field
                      name="name"
                      className=" border rounded-lg border-gray-400 p-2 w-[90%] "
                      placeholder="Luv"
                    />
                    <div className="text-red-500 text-xs font-medium">
                      <ErrorMessage name="name" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="surname">Surname</label>
                    <Field
                      name="surname"
                      className=" border rounded-lg border-gray-400  p-2 w-[90%] "
                      placeholder="Sharma"
                    />
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
                <div className="flex flex-col gap-2 mt-2">
                  <label htmlFor="resetpassword">Confirm Password</label>
                  <Field
                    type="password"
                    className="  border rounded-lg border-gray-400 p-2 "
                    name="resetpassword"
                    placeholder="Confirm your password"
                  />
                  <div className="text-red-500 text-xs font-medium">
                    <ErrorMessage name="resetpassword" />
                  </div>
                </div>

                <div className="flex gap-2 mt-2">
                  <Field type="checkbox" name="checkbox" />
                  <label htmlFor="checkbox">
                    I agree all{" "}
                    <span className="text-purple-900">
                      Terms ans Conditions
                    </span>
                  </label>
                  <div className="text-red-500 text-xs font-medium">
                    <ErrorMessage name="checkbox" />
                  </div>
                </div>

                <div className="flex justify-end mt-5">
                  <button
                    type=" submit"
                    className=" bg-dark-yellow p-1 border flex justify-center items-center gap-2 rounded-lg font-medium w-[100%] mb-5 cursor-pointer hover:bg-blue-gray-300 transition-colors duration-700 "
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
                    <span>Create Account</span>
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="text-sm flex justify-center">
          Already have an account?{" "}
          <span className="text-purple-900 font-semibold cursor-pointer">
            {" "}
            <Link to="/">Login</Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default Signup;
