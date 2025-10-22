import { createBrowserRouter } from "react-router";

import Homelayout from "../Components/layout/Homelayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Components/layout/AuthLayout";
import NewsDetails from "../Components/NewsDetails";
 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
    children:[
      {
        path:"",
        element:<Home></Home>
      },
      {
        path:"/category/:id",
        element:<CategoryNews></CategoryNews>,
       loader:()=>fetch("/news.json")
      },
    ]
  },
  {
    path:'/auth',
    element:<AuthLayout></AuthLayout>,
    children:[
     {
      path:"/auth/login",
      element:<Login></Login>,
     },
     {
      path:"/auth/register",
      element:<Register></Register>
     }
    ]
  },
  {
    path:'/newsDetails/:id',
    element:<NewsDetails></NewsDetails>,
      loader:()=>fetch("/news.json")
  },
  {
    path:'/*',
    element:<h3>error </h3>,
  },
]);
export default router