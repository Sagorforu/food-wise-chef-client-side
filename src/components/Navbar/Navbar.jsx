import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    // const [user, setUser] = useState(null)
    const user = null;

  return (
    <div className="background-color py-5 lg:flex items-center justify-between lg:px-36 px-2">
      <Link to="/">
        <h2 className="text-[#383838] font-bold text-4xl">Food <span className="text-[#e05f09]">Wise</span></h2>
      </Link>
      <ul className="lg:flex ">
        <li className="p-4 font-semibold text-xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#383838]" : "text-[#e05f09]"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="p-4 font-semibold text-xl">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#383838]" : "text-[#e05f09]"
            }
          >
            About us
          </NavLink>
        </li>
        <li className="p-4 font-semibold text-xl">
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-[#383838]" : "text-[#e05f09]"
            }
          >
            Blogs
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-4 items-center justify-center">
        { user? <div>
          <img
            className="w-10 mask mask-hexagon"
            src="https://i.ibb.co/wrkccHX/anahita.jpg"
          />
        </div> :
        <Link to="/login">
          <button className="btn btn-outline text-[#383838]">Login</button>
        </Link>}
      </div>
    </div>
  );
};

export default Navbar;
