import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { Resetpassword } from "../../../../api/Query/userQuery";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";

const ContactValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password should be of min 8 characters")
    .min(8),
  resetpassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
function Reset() {
  const {token} = useParams();
  const navigate = useNavigate();

  const {mutate,isLoading} = useMutation({
    mutationKey:["Password-reset-done"],
    mutationFn:Resetpassword,
    onSuccess:(data)=>{
      toast.success(data.message);
      navigate('/');
    },
    onError:(error)=>{
      toast.error(error.message)
    }
  })
  return (
    <>
      <div className="w-[400px] p-5 mx-auto bg-white h-[max-content] mt-[10rem] rounded-lg vsm:h-[100svh] vsm:mt-0 vsm:w-[100%] vsm:flex vsm:flex-col vsm:justify-center vsm:items-center">
        <div>
          <h1 className=" text-3xl vsm:text-2xl">Reset Password</h1>
        </div>
        <div>
          <p className="text-xs text-gray-500 my-3">Enter your new password.</p>
        </div>
        <div>
          <Formik
            validationSchema={ContactValidationSchema}
            initialValues={{
              password: "",
              resetpassword: "",
            }}
            onSubmit={(value, helpers) => {
              mutate({token:token,password:value.password});
            }}
          >
            <Form className="flex flex-col h-[max-content]">
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

              <div className="flex justify-end mt-5">
                <button className="flex justify-center items-center gap-2 bg-dark-yellow p-1 border rounded-lg font-medium w-[100%] mb-5 cursor-pointer hover:bg-blue-gray-300 transition-colors duration-700 vsm:bg-purple-700 vsm:text-white">
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
    </>
  );
}

export default Reset;
