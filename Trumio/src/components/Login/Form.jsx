import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
function Form() {
  return (
    <>
      <Formi
        onSubmit={(values) => {
          console.log(values)
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
      </Formi>
    </>
  );
}

export default Form;
