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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/home',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/users')
          
      },
      {
        path:'/service',
        element:<Service></Service>
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
      element:<AddService></AddService>
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
