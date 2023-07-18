import React, { useEffect, useState } from "react";

function Tabcontent({types}) {
  const head = ["ID", "Date & Time", "Type", "Amount", "Status"];
  const transactdata = [
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      time: "07:06 PM",
      type: "INR Deposit",
      way: "E-Transfer",
      amount: "+ ₹81,123.10",
      status: <span className="bg-gray-800 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Pending</span>,
    },
    {
      id: "HD82NA2H",
      date: "2022-06-27",
      time: "03:03 PM",
      type: "INR Withdraw",
      way: "Wire-Transfer",
      amount: "- ₹81,123.10",
      status: <span className="bg-yellow-800 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Processing</span>,
    },
    {
      id: "HD82NA2H",
      date: "2021-07-09",
      time: "07:17 AM",
      type: "Buy",
      way: "",
      amount: "+ 12.485 BTC",
      status: <span className="bg-red-800 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Cancelled</span>,
    },
    {
      id: "HD82NA2H",
      date: "2022-07-19",
      time: "09:15 PM",
      type: "Sell",
      way: "",
      amount: "- 0.364 BTC",
      status: <span className="bg-gray-800 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Pending</span>,
    },
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      time: "08:08 PM",
      type: "BTC Deposit",
      way: "",
      amount: "+ 4.139 BTC",
      status: <span className="bg-green-800 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Completed</span>,
    },
    {
      id: "HD82NA2H",
      date: "2022-09-09",
      time: "07:19 PM",
      type: "BTC Withdraw",
      way: "E-Transfer",
      amount: "- 10.000 BTC",
      status: <span className="bg-green-800 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Completed</span>,
    },
    {
      id: "HD82NA2H",
      date: "2022-09-19",
      time: "07:20 AM",
      type: "BTC Trade",
      way: "E-Transfer",
      amount: "- 30.089 BTC",
      status: <span className="bg-green-800 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Completed</span>,
    },
  ];
  const filter = transactdata.filter((value) =>
  value.type.toLowerCase().includes(types.toLowerCase())
  );
  const [list,setlist] = useState(transactdata);

  //as was too many renders
  useEffect(()=>{
    if(filter.length!==0){
      setlist(filter);
    }
  },[]);

  return (
    <>
    <div className="overflow-auto ">
      <table className="table-auto w-[100%] overflow-x-scroll flex-nowrap ">
        <thead>
          <tr >
            {head.map((value, i) => (
              <th key={i} className="whitespace-nowrap">{value}</th>
            ))}
          </tr>
        </thead>
  
        <tbody>
          {list.map((value, i) => (
            <>
            <tr key={i} className="text-sm font-semibold text-black">
              <td key ={value.id}><span className="flex justify-center items-center  md:text-xs whitespace-nowrap mx-2">{value.id}</span></td>
              <td  key ={value.date}><span className="flex flex-col mt-3 items-center  md:text-xs whitespace-nowrap mx-2"><span>{value.date}</span><span className="text-xs text-gray-700">{value.time}</span></span></td>
              <td key ={value.type} ><span className="flex flex-col mt-3 items-center  md:text-xs whitespace-nowrap mx-2"><span>{value.type}</span><span className="text-xs text-gray-700">{value.way}</span></span></td>
              <td key ={value.amount}><span className="flex justify-center items-center  md:text-xs whitespace-nowrap mx-2">{value.amount}</span></td>
              <td key ={value.status}><span className="flex justify-center items-center  md:text-xs whitespace-nowrap mx-2">{value.status}</span></td>
            </tr>
            </>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default Tabcontent;
