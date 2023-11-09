import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/LoginLayout/MainLayout/MainLayout";
import Home from "../Pages/HomePage/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [{
        path:'/',
        element:<Home></Home>
    }],
  },
]);
