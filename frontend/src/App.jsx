import "./app.scss";
import Login from "./pages/Login/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import { useState } from "react";
import Dashboard from "./screens/Dashboard";
import Register from "./pages/Register/Register";
import AddPlot from "./components/AddPlot/AddPlot";
import Messages from "./screens/messages/Messages";
import EditPlot from "./components/EditPlot/EditPlot";

function App() {
  const [auth, setAuth] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login setAuth={setAuth} />,
    },
    {
      path: "/register",
      element: <Register />,
    },

    {
      element: <AppLayout /> ,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/messages",
          element: <Messages/>,
        },
        {
          path: "/edit-plot",
          element: <EditPlot/>,
        },
        // {
        //   path: "/edit-plot",
        //   element: <Dashboard />,
        // },
      ],
    },
  ]);

  return (
    <>
      <div className="app-container">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
