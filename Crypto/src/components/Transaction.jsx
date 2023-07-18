import React from 'react'
import Layout from "./Layout";
import TransactContent from './Pages/Transact/TransactContent';
function Transaction() {
  return (
    <>
        <Layout title="Transaction" content={<TransactContent/>}/>
    </>
  )
}

export default Transaction