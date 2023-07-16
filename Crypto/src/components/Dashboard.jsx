import React from "react";
import Layout from "./Layout";

import DashContent from "./Pages/Dash/DashContent"
function Dashboard() {
  return (
    <>
      <Layout title="Dashboard" content={<DashContent/>}/>
    </>
  );
}

export default Dashboard;
