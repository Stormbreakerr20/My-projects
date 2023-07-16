import React from "react";
import { HiCurrencyRupee } from "react-icons/hi";
import { FaBitcoin } from "react-icons/fa";
import RTcontent from "./RTcontent";
function Recent() {
  return (
    <>
      <div className="bg-white h-[350px] w-[50%] p-5 mt-5 ml-3 rounded-lg flex flex-col gap-5 smd:w-[100%] smd:mx-[auto] smd: mb-5">
        <div>Recent Transactions</div>
        <div className="flex flex-col gap-5">
          <RTcontent
            head="INR Deposit"
            bottom="2022-06-09 7:06 PM"
            amt="+ ₹81,123.10"
            icon={<HiCurrencyRupee />}
          />
          <hr />
          <RTcontent
            head="BTC Sell"
            bottom="2022-05-27 12:32 PM"
            amt="- 12.4851 BTC"
            icon={<FaBitcoin />}
          />
          <hr />
          <RTcontent
            head="INR Deposit"
            bottom="2022-06-09 7:06 PM"
            amt="+ ₹81,123.10"
            icon={<HiCurrencyRupee />}
          />
        </div>

        <button className="bg-[#EEEEF4] p-2 rounded-lg hover:bg-blue-gray-400 transition-colors duration-1000">
          View All
        </button>
      </div>
    </>
  );
}

export default Recent;
