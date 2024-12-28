
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import {
  createBrowserRouter
} from "react-router-dom";
import Menu from "../Pages/Home/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret";
import PrivatRoute from "./PrivatRoute";
import Dashboard from "../Layout/Dashboard";
import Carts from "../Pages/Dashboard/Carts/Carts";



export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'order/:category',
          element:<Order></Order>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'secret',
          element:<PrivatRoute><Secret></Secret></PrivatRoute>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'cart',
          element:<Carts></Carts>
        }
      ]
    }
  ]);