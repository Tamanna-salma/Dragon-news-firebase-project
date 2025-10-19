import { createBrowserRouter } from "react-router";

import Homelayout from "../Components/layout/Homelayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
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
    element:<h3>authentication </h3>,
  },
  {
    path:'/news',
    element:<h3>news layout </h3>,
  },
  {
    path:'/*',
    element:<h3>error </h3>,
  },
]);
export default router