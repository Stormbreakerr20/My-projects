import "./App.css";
import Sidenav from "./components/Sidenav";
import Dashboard from "./components/Dashboard";
import Transaction from "./components/Transaction";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
      element: <Dashboard />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
