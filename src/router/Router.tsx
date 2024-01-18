import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import Register from "../pages/auth/Register";
import SignIn from "../pages/auth/SignIn";

export const Router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Register />,
      },
      {
        index: true,
        path: "login",
        element: <SignIn />,
      },
    ],
  },
]);
