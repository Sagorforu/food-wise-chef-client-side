import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Main from "./components/Main/Main";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ViewDetails from "./components/Home/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'blog',
        element: <Blogs></Blogs>
      },
      {
        path: 'chefdata/:id',
        element: <ViewDetails></ViewDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/chefdata/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
