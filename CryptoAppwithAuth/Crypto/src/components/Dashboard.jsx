import React, { useContext, useEffect } from "react";
import Layout from "./Layout";

import DashContent from "./Pages/Dash/DashContent"
import { fetchExample } from "../api/Query/exampleQuery";
import { useQuery } from "react-query";

function Dashboard() {


  // const exapmleQuery = useQuery({
  //   queryKey:["example"],
  //   queryFn:fetchExample
  // })

  // if(exapmleQuery.isLoading) return <div>Loading...</div>

  // useEffect(()=>{
  //   const data = fetchExample();
  //   console.log(data)
  // },[])
  const token = "jjj"
  console.log(!!token)

  return (
    <>
      <Layout title="Dashboard" content={<DashContent/>}/>
    </>
  );
}

export default Dashboard;
