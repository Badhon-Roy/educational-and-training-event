import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import AboutUs from './Pages/AboutUs/AboutUs';
import Register from './Pages/Register/Register';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ErrorPage from './ErrorPage/ErrorPage';
import ServicesDetails from './Pages/ServicesDetails/ServicesDetails';
import Contact from './Pages/Contact/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path : "/service/:id",
        element : <ServicesDetails></ServicesDetails>,
        loader : async({params})=>{
          const services = await fetch("/Services.json")
          const res = await services.json()
          const service = res.find(item => item.id === parseInt(params.id))
          return service;
        }
      },
      {
        path: '/about',
        element: <PrivateRoute><AboutUs></AboutUs></PrivateRoute>
      },
      {
        path : '/contact',
        element : <Contact></Contact>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
