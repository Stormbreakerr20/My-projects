import React, { useState } from "react";
import Form from "./InlineForm";
import { LuChevronRight } from "react-icons/lu";

function Project() {
  const [selected, setSelected] = useState("");
  const [status, setStatus] = useState("");

  const handleClick = (val) =>{
    setSelected(val)
    setStatus(val)
  }
  const projectStatus = [
    {
      count: 0,
      status: "Ongoing",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          style={{
            backgroundColor: "#E0F8FD",
            borderRadius: "50%",
            margin: "1em",
            color: "#01CFE9",
            padding: "10px",
          }}
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
    },
    {
      count: 0,
      status: "Upcoming",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          style={{
            backgroundColor: "#E2ECFE",
            borderRadius: "50%",
            margin: "1em",
            color: "#0C6EFC",
            padding: "10px",
          }}
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      ),
    },
    {
      count: 0,
      status: "Completed",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          style={{
            backgroundColor: "#E4F8EC",
            borderRadius: "50%",
            margin: "1em",
            color: "#28C66E",
            padding: "10px",
          }}
        >
          <polyline points="9 11 12 14 22 4"></polyline>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
      ),
    },
    {
      count: 0,
      status: "Terminated",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          style={{
            backgroundColor: "#F6E2E2",
            borderRadius: "50%",
            margin: "1em",
            color: "#BF3535",
            padding: "10px",
          }}
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="9" y1="15" x2="15" y2="15"></line>
        </svg>
      ),
    },
    {
      count: 0,
      status: "Disputed",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          style={{
            backgroundColor: "#FDEAEB",
            borderRadius: "50%",
            margin: "1em",
            color: "#EF7E81",
            padding: "10px",
          }}
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <line x1="18" y1="8" x2="23" y2="13"></line>
          <line x1="23" y1="8" x2="18" y2="13"></line>
        </svg>
      ),
    },
    {
      count: 0,
      status: "Invited",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          style={{
            backgroundColor: "#E9DEEB",
            borderRadius: "50%",
            margin: "1em",
            color: "#EB5555",
            padding: "10px",
          }}
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <line x1="18" y1="8" x2="23" y2="13"></line>
          <line x1="23" y1="8" x2="18" y2="13"></line>
        </svg>
      ),
    },
  ];
  return (
    <>
      <div className="bg-[#f8f8f8] flex justify-center mt-[70px]">
        <div className="flex gap-5 flex-col p-5">
          <div className="flex ml-3 items-center gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0578FB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mb-25"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </span>
            <span>
              <LuChevronRight />
            </span>
            <span className="text-[#0065C1]">Project</span>
            {status === "" ? (
              ""
            ) : (
              <>
                <span>
                  <LuChevronRight />
                </span>
                <span>{status}</span>
              </>
            )}
          </div>
          <div className="flex flex-wrap gap-5 ">
            {projectStatus.map((value, index) => (
              <div
                key={index}
                onClick={() => handleClick(value.status)}
                className={`w-[220px] cursor-pointer pl-3 pt-2 mx-1 shadow-lg h-[80px] rounded-lg bg-white flex justify-between ${
                  selected === value.status
                    ? "bg-[#d7e7fc] outline outline-1 outline-blue-700"
                    : ""
                }`}
              >
                <div className="flex flex-col gap-1 pl-2 py-1">
                  <span className=" font-semibold text-slate-600 text-2xl">{value.count}</span>
                  <span className=" text-sm text-slate-400">{value.status}</span>
                </div>
                <div className=" h-[100%] flex">{value.img}</div>
              </div>
            ))}
          </div>
          <div className="p-2">
            <Form status={status}/>
          </div>
          <div className="h-[50vh] bg-white shadow-lg rounded-lg w-[100%] flex justify-center items-center">
            <figure className="flex flex-col justify-center items-center">
              <img
                className="h-[200px] w-[200px] "
                src="/public/images/searching.gif"
                alt=""
              />
              <figcaption className="text-[#2863C2]">No Data Found!</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
