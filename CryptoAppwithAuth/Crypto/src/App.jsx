import "./App.css";

import Dashboard from "./components/Dashboard";
import Transaction from "./components/Transaction";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Support from "./components/Support";
import { ToastContainer } from 'react-toastify';
import Signup from "./components/Pages/Auth/Signup/Signup";
import Login from "./components/Pages/Auth/Login/Login";
import Email from "./components/Pages/Auth/Verification/Email";
import Registration from "./components/Pages/Auth/Verification/Registration";
import Forgotpassword from "./components/Pages/Auth/Verification/Forgotpassword";
import Sent from "./components/Pages/Auth/Verification/Sent";
import Reset from "./components/Pages/Auth/Verification/Reset";

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useState } from "react";

const queryClient = new QueryClient()


function App() {
  const [token,setToken] =useState("");
  const router = createBrowserRouter([
    {
      path: "/dash",
      element: token===""? <Login setToken={setToken} />:<Dashboard />,
    },
    {
      path: "/transactions",
      element:token===""? <Login setToken={setToken} />:<Transaction />,
    },
    {
      path: "/support",
      element:token===""? <Login setToken={setToken} />:<Support />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/",
      element: <Login setToken={setToken} />,
    },
    {
      path: "/email-registration/:email",
      element: <Email />,
    },
    {
      path: "/email-verify/:token",
      element: <Registration />,
    },
    {
      path: "/forgot",
      element: <Forgotpassword />,
    },
    {
      path: "/sent/:email",
      element: <Sent />,
    },
    {
      path: "/forgot-password-verify/:token",
      element: <Reset />,
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer />
      
    </QueryClientProvider>
  );
}

export default App;
