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
import Terms from "./components/Register/Terms";
import AuthProvider from "./components/Providers/AuthProvider";
import PrivateRoute from "./Routes/PrivateRoute";
import UserDetails from "./components/Register/UserDetails";
import BookNow from "./components/Home/BookNow";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "booknow",
        element: <BookNow></BookNow>
      },
      {
        path: "blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/terms",
        element: <Terms></Terms>,
      },
      {
        path: '/userdetails',
        element: <UserDetails></UserDetails>
      },
      {
        path: "/chefdata/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://food-wise-server-sagorislam1318-gmailcom.vercel.app/chefdata/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
