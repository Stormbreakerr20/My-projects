import "./App.css";
import Sidenav from "./components/Sidenav";
import Dashboard from "./components/Dashboard";
import Transaction from "./components/Transaction";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Support from "./components/Support";
import { ToastContainer } from 'react-toastify';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/transactions",
      element: <Transaction />,
    },
    {
      path: "/support",
      element: <Support />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer/>
      
    </>
  );
}

export default App;
