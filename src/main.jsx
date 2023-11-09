import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './Pages/Home';
import './index.css'
import Login from './Routes/Login';
import Register from './Routes/Register';
import Root from './Layout/Root';
import Service from './Routes/Service';
 import Dashboard from './Routes/Dashboard';
 import AuthProvider from './Pages/Provider/AuthProvider';
 import PrivateRoute from './Pages/Provider/PrivateRoute';
 import AddService from './Components/AddService/AddService';
 import ErrorPage from './Pages/ErrorPage/ErrorPage';

 import ServiceDetails from './Routes/Details/ServiceDetails';
 import Manage from './Routes/Manage/Manage';
 import Update from './Routes/Update/Update';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    ErrorPage:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/home',
        element:<Home></Home>,
        loader:()=>fetch('https://assignment-11-server-plum-gamma.vercel.app/users')
          
      },
      {
        path:'/service',
        element:<Service></Service>,
        loader:()=>fetch(' https://assignment-11-server-plum-gamma.vercel.app/users')

      },

      {
       path:'/serviceDetails/:_id',
       element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
       loader:({params})=>fetch(` https://assignment-11-server-plum-gamma.vercel.app/users/${params._id}`)
      },
     {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
     },
     {
      path:'/login',
      element:<Login></Login>
     },
     {
      path:'/register',
      element:<Register></Register>
     },
     {
      path:'/addService',
      element:<PrivateRoute><AddService></AddService></PrivateRoute>
     },
     {
      path:'/manage',
      element:<PrivateRoute><Manage></Manage></PrivateRoute>,
      loader:()=>fetch(' https://assignment-11-server-plum-gamma.vercel.app/users')
     },
     {
      path:'/update/:id',
      element:<Update></Update>,
      loader:({params})=>fetch(` https://assignment-11-server-plum-gamma.vercel.app/users/${params.id}`)
     } 
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className="w-[1200px] mx-auto">
  <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </div>
  </React.StrictMode>,
)
