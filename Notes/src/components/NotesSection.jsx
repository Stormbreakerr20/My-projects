import React, { useEffect, useState } from "react";

function NotesSection({ currentMode }) {
  const [currentDayOfWeek, setCurrentDayOfWeek] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const currentDayOfWeekval = date.toLocaleString("en-US", {
      weekday: "long",
    });
    const currentMonthval = date.toLocaleString("en-US", { month: "long" });
    let currentDateval = date.getDate();
    currentDateval =
      currentDateval < 10 ? "0" + currentDateval : currentDateval;

    setCurrentDayOfWeek(currentDayOfWeekval);
    setCurrentMonth(currentMonthval);
    setCurrentDate(currentDateval);
  }, []);
  return (
    <>
      <div className="flex justify-between ">
        <div className="flex flex-col justify-between flex-grow">
          <div className="flex-grow flex flex-col justify-center gap-3  text-blue">
            <span className="text-xl font-semibold pl-10">{currentDayOfWeek}</span>
            <span className=" text-8xl font-bold pl-8 ">{currentDate}</span>
            <span className=" text-2xl font-semibold pl-10">{currentMonth}</span>
          </div>
          <div className="flex items-center justify-center flex-grow">
            <span className=" cursor-pointer bg-[#FFA800] w-[70%] p-3 rounded-3xl text-white font-semibold text-2xl text-center">
              Start Writing
            </span>
          </div>
        </div>
        <div className="mr-5">
          <img
            className="h-[420px] w-[300px]"
            src={`images/${currentMode}.png`}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default NotesSection;
