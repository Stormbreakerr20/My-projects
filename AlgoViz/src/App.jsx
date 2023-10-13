import { useState } from 'react'
import './App.css'
import Nav from './assets/components/Nav'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Sorting from './assets/Pages/Sort/Sorting'
import Layout from './assets/Pages/Layout/Layout'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout />,
    },
  ]);
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App

// const Box = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: blue;
// `
