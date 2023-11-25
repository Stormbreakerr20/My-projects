import React from "react";

function LoginPage() {
  return (
    <>
      <div className="flex w-[100%] justify-center items-center h-[100vh]">
        <div className=" flex justify-between w-[80%]">
          <div className="bg-[#0185e41f] h-[80vh] w-[400px] rounded-lg">
            <div className="flex gap-2 items-end">
              <img src="/public/images/logo.png" alt="" />
              <span className="mb-2 text-sm">v0.0.11</span>
            </div>
            <div>
              <span>Welcome Back!</span>
              <span></span>
            </div>
            <div>
              
            </div>
          </div>
          <div className="h-[100%] w-[50%] rounded-lg">
            <img src="/public/images/login.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
