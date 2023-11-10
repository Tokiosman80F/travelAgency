import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import LoginLayout from "../Layout/LoginLayout/LoginLayout";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import AboutLayout from "../Layout/AboutLayout/AboutLayout";
import About from "../Pages/AboutPage/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path:"/register",
        element:<RegisterPage></RegisterPage>
      },
    ],
  },
  {
    path:"about",
    element:<AboutLayout></AboutLayout>,
    children:[
      {
        path:"/about",
        element:<About></About>
      }
    ]
  }
]);
