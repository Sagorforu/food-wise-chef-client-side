import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1A1919] text-white lg:p-12 lg:mt-12 mt-6 lg:px-36">
      <div className="lg:grid grid-cols-5 lg:gap-6 mx-2">
        <div className="col-span-1 lg:py-0 py-1">
          <Link to="/">
            <h2 className="text-[#f0f0f0] font-bold text-3xl mt-6 lg:text-4xl">
              Food<span className="text-[#e05f09]">Wise</span>
            </h2>
          </Link>
          <ul className="mt-6 text-left">
            <li>
              <p className="text-[#FFFFFFB2] font-normal text-base">
                There are many variations of passages of Lorem Ipsum , but the
                majority have suffered alteration in some form.
              </p>
            </li>
            <li className="mt-4">
              <img src="https://i.ibb.co/jwwKJWd/Group-9969.png" alt="" />
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:py-0 py-1">
          <h4 className="text-xl mt-4 font-semibold">Company</h4>
          <ul className="lg:mt-4 text-[#FFFFFFB2] font-normal text-base">
            <li>
              <Link to="/" className="block py-1">
                About us
              </Link>
            </li>
            <li>
              <Link to="/" className="block py-1">
                Work
              </Link>
            </li>
            <li>
              <Link to="/" className="block py-1">
                Latest News
              </Link>
            </li>
            <li>
              <Link to="/" className="block py-1">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:py-0 py-1">
          <h4 className="text-xl mt-4 font-semibold">Product</h4>
          <ul className="lg:mt-4 text-[#FFFFFFB2] font-normal text-base">
            <li>
              <Link to="/" className="block py-1">
                Prototype
              </Link>
            </li>
            <li>
              <Link to="/" className="block py-1">
                Plans & Pricing
              </Link>
            </li>
            <li>
              <Link to="/" className="block py-1">
                Customers
              </Link>
            </li>
            <li>
              <Link to="/" className="block py-1">
                Integrations
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:py-0 py-1">
          <h4 className="text-xl mt-4 font-semibold">Support</h4>
          <ul className="lg:mt-4 text-[#FFFFFFB2] font-normal text-base">
            <li>
              <Link to="/" className="block py-1">
                Help Desk
              </Link>
            </li>
            <li>
              <Link to="/" className="block py-1">
                Sales
              </Link>
            </li>
            <li>
              <Link to="/" className="block py-1">
                Become a Partner
              </Link>
            </li>
            <li>
              <Link to="/" className="block py-1">
                Developers
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:py-0 py-1">
          <h4 className="text-xl mt-4 font-semibold">Contact</h4>
          <ul className="lg:mt-4 text-[#FFFFFFB2] font-normal text-base">
            <li>
              <Link to="/" className="block py-1">
                524 Broadway , NYC
              </Link>
            </li>
            <li>
              <Link to="/" className="block py-1">
                +1 777 - 978 - 5570
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center p-8 lg:mt-4">
        <small className="">
          Copyright &#169; 2023. All rights reserved. Created by Sagor Islam
        </small>
      </p>
    </footer>
  );
};

export default Footer;
