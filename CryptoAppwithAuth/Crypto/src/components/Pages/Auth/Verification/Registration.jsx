import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { emailVerify } from "../../../../api/Query/userQuery";
import { toast } from "react-toastify";
function Registration() {
  // const params = useParams();
  const navigate = useNavigate();

  const { token } = useParams();
  // console.log(params); //object with token
  const { isSuccess } = useQuery({
    queryFn: () => emailVerify({ token }),
    queryKey: ["email-verify-token"],
    enabled: !!token,
    onError: (error) => {
      toast.error(error.message);
      navigate("/signup");
    },
  });
  return (
    <>
      {isSuccess && (
        <div className="h-[100svh] w-[100%] flex justify-center items-center">
          <div className="w-[400px] flex flex-col justify-center gap-3 items-center p-5 mx-auto bg-white h-[max-content] rounded-lg vsm:mx-2 vsm:w-[80%]">
            <div className="text-4xl text-green-600">
              {<BsPatchCheckFill />}
            </div>
            <div className="text-2xl vsm:text-xl">
              Successfully Registration
            </div>
            <p className=" text-center text-sm text-gray-700">
              Hurray! You have successfully created your account. Enter the app
              to explore all it’s features.
            </p>
            <div className="flex mt-5 w-[100%]">
              <Link
                to="/"
                className="flex justify-center bg-purple-800 text-white p-1 border rounded-lg font-medium w-[100%] mb-5 cursor-pointer hover:bg-blue-gray-300 hover:text-black transition-colors duration-700 "
              >
                Enter the App
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Registration;
