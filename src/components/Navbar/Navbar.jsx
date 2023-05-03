import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="background-color py-5 lg:flex items-center justify-between lg:px-36 px-2">
      <Link to="/">
        <h2 className="text-[#383838] font-bold text-4xl">
          Food<span className="text-[#e05f09]">Wise</span>
        </h2>
      </Link>
      <ul className="lg:flex ">
        <li className="p-4 font-semibold text-xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#e05f09]" : "text-[#383838]"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="p-4 font-semibold text-xl">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#e05f09]" : "text-[#383838]"
            }
          >
            About us
          </NavLink>
        </li>
        <li className="p-4 font-semibold text-xl">
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-[#e05f09]" : "text-[#383838]"
            }
          >
            Blogs
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-4 items-center justify-center">
        {user ? (
          <div className="flex gap-4 items-center">
            <img
              className="w-10 mask mask-hexagon"
              src={user.photoURL}
            />
            <p>{user.email}</p>
            <button className="btn btn-outline text-[#383838]">LogOut</button>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button className="btn btn-outline me-4 text-[#383838]">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-outline text-[#383838]">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
