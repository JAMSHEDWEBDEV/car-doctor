
import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"/service",
            element:<Services></Services>
        },
        {
            path:"/blog",
            element:<Blog></Blog>
        },
        {
            path:"/contact",
            element:<Contact></Contact>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signUp",
          element:<SignUp></SignUp>
        },
        {
          path:"/checkOut/:id",
          element:<CheckOut></CheckOut>
        }
      ]
    },
  ]);

  export default Router;