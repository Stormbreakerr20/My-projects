import React from "react";
import Tabarea from "../Dash/Contentcomponents/Tabs";
import Tabcontent from "./Tabcontent";

function Detalis() {
  const data = [
    {
      label: "All",
      value: "All",
      desc: <Tabcontent types="all"/>,
    },
    {
      label: "Withdraw",
      value: "Withdraw",
      desc: <Tabcontent types="Withdraw" />,
    },
    {
      label: "Deposit",
      value: "Deposit",
      desc:  <Tabcontent types="Deposit" />,
    },
    {
      label: "Trade",
      value: "Trade",
      desc: <Tabcontent types="Trade" />,
    },
  ];

  return (
    <>
      <div className="bg-white mb-3 rounded-lg ">
        <Tabarea data={data} />
      </div>
    </>
  );
}

export default Detalis;
