import React from "react";
import Lottie from "lottie-react";
import healthyFood from "../../assets/healthyFood.json";

const Header = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(https://i.ibb.co/27xWWYQ/pexels-rene-asmussen-3217146.jpg)`,
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-[#eeeeee] text-5xl font-bold">
            The best place for awesome{" "}
            <span className="text-[#ff7213] text-6xl">Recipes</span> and Chef
          </h1>
          <p className="mb-5 text-[#eeeeee]">
            Custom meal plans and nutrition coaching for your health goals. Your
            needs and preferences, with guidance on mindful eating and
            sustainable habits.
          </p>
          <div className="">
            <input
              className="p-3 ps-5 rounded-lg w-full shadow-xl shadow-gray-700 mb-8"
              type="search"
              name="search"
              placeholder="Search your choice"
            />{" "}
            <br />
            <button className="btn btn-outline btn-accent">Search</button>
          </div>
        </div>
        {/* <div><Lottie className="w-1/2" animationData={healthyFood} loop={true}></Lottie></div> */}
      </div>
    </div>
  );
};

export default Header;
