import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Layout/Pages/Home/Home";
import Menu from "./Layout/Pages/Menu/Menu";
import { HelmetProvider } from "react-helmet-async";
import Order from "./Layout/Pages/Order/Order";
import Login from "./Layout/Pages/LoginAndRegister/Login";
import AuthProviders from "./Providers/AuthProviders";
import SIngUp from "./Layout/Pages/LoginAndRegister/SIngUp";
import Secret from "./Layout/Pages/Share/Secret";
import PrivateRoute from "./Providers/PrivateRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./Layout/Dashboard";
import Cart from "./Layout/Pages/Dashboard/Cart";
import AllUsers from "./Admin/AllUsers";
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "singUp",
        element: <SIngUp></SIngUp>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "Cart",
        element: <Cart></Cart>,
      },

      // -----------ADMIN ROUTES--------------------
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviders>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className="max-w-screen-xl mx-auto">
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProviders>
  </StrictMode>
);
