import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BeakerIcon } from '@heroicons/react/24/solid'


const Footer = () => {
  return (
    <footer className="bg-[#1A1919] text-white lg:p-12 lg:mt-12 mt-6 lg:px-36">
      <div className="lg:grid grid-cols-5 lg:gap-6 mx-2">
        <div className="col-span-2 lg:py-0 py-1">
          <Link to="/">
            <h2 className="text-[#f0f0f0] font-bold text-3xl mt-6 lg:text-4xl">
              Food<span className="text-[#e05f09]">Wise</span>
            </h2>
          </Link>
          <ul className="mt-6 text-left">
            <li>
              <p className="text-[#FFFFFFB2] font-normal text-base">
                There are many variations of passages of Lorem Ipsum <br /> but the
                majority have suffered alteration in some form.
              </p>
            </li>
            <li className="mt-4">
              <img src="https://i.ibb.co/jwwKJWd/Group-9969.png" alt="" />
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:py-0 py-1">
          <h4 className="text-xl mt-4 font-semibold">Categories</h4>
          <ul className="lg:mt-4 text-[#FFFFFFB2] font-normal text-base">
            <li>
              <Link to="/" className="py-1 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 me-2 text-[#ff781e]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg> Breakfast Recipes
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center py-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 me-2 text-[#ff781e]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
              Lunch Recipes
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center py-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 me-2 text-[#ff781e]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
              Dinner Recipes
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center py-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 me-2 text-[#ff781e]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
              Drink Recipes
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center py-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 me-2 text-[#ff781e]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
              Appetizer & Snack
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center py-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 me-2 text-[#ff781e]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
              Kitchen Tips
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:py-0 py-1">
          <h4 className="text-xl mt-4 font-semibold">Learn More</h4>
          <ul className="lg:mt-4 text-[#FFFFFFB2] font-normal text-base">
            <li>
              <Link to="/" className="flex items-center py-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 me-2 text-[#ff781e]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
                About us
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center py-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 me-2 text-[#ff781e]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
                Team
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center py-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 me-2 text-[#ff781e]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
                Careers
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center py-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 me-2 text-[#ff781e]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
                Advertise
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center py-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 me-2 text-[#ff781e]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
                Content Licensing
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:py-0 py-1">
          <h4 className="text-xl mt-4 font-semibold">Contact</h4>
          <ul className="lg:mt-4 text-[#FFFFFFB2] font-normal text-base">
            <li>
              <Link to="/" className="flex items-center py-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 me-2 text-[#ff781e]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
                524 Broadway , NYC
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center py-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 me-2 text-[#ff781e]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
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
