import "./app.scss";
import Login from "./pages/Login/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import { useState } from "react";
import Dashboard from "./screens/Dashboard";
import Register from "./pages/Register/Register";

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
      element: auth ? <AppLayout /> : <Login />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
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
