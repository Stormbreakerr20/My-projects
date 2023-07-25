import React, { useEffect } from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { useMutation } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import { sendemailVerify } from "../../../../api/Query/userQuery";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";


function Email() {
  const {email} = useParams();

  if (email === "")
    return (
      <div className="h-[100svh] flex w-[100%] justify-center items-center">
        Invalid Email
      </div>
    );

  const {mutate, isLoading } = useMutation({
    mutationKey: ["email-verify"],
    mutationFn: sendemailVerify,
    onSettled: (data) => {
      console.log(data)
    },
    onError: (error) => {
      toast.error(`Sign-Up Error: ${error.message}`);
    },
    enabled: !!email,
  });
  useEffect(()=>{
    mutate({email})
    toast.success("Verify your Email");
  },[email])


  return (
    <>

        <div className="h-[100svh] w-[100%] flex justify-center items-center">
          <div className="w-[400px] flex flex-col justify-center gap-3 items-center p-5 mx-auto bg-white h-[max-content] rounded-lg vsm:mx-2 vsm:w-[80%]">
            <div className="text-4xl text-purple-900">
              {<BsFillEnvelopeFill />}
            </div>
            <div className="text-2xl">Email Verification</div>
            <p className=" text-center text-sm text-gray-700">
              We have sent you an email verification to{" "}
              <span className="text-black font-semibold">{email}</span>. If you
              didn’t receive it, click the button below.
            </p>
            <div className="flex mt-5 w-[100%]">
              <button onClick={()=> {
                mutate({email})
                toast.success("Verification Re-sent")}} className="gap-2 flex justify-center items-center bg-dark-yellow p-1 border rounded-lg font-medium w-[100%] mb-5 cursor-pointer hover:bg-blue-gray-300 transition-colors duration-700 ">
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
                <span>Re-Send Email</span>
              </button>
            </div>
          </div>
        </div>
    </>
  );
}

export default Email;
