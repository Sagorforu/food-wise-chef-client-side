import React from "react";
import { Link } from "react-router-dom";

const BookNow = () => {
  return (
    <div className="mb-16">
      <div className="background-color text-center lg:pb-8 lg:pt-12 pt-4">
        <h2 className="text-[#383838] font-bold text-3xl lg:text-5xl">
          You can hire
        </h2>
      </div>
      <div className="mt-6 grid lg:grid-cols-2 gap-4 items-center justify-between lg:px-36 px-2">
        <div>
          <div className="flex justify-center">
            <img
              className="rounded-2xl"
              src="https://i.ibb.co/xJcFScw/picture3.jpg"
              alt=""
            />
          </div>
        </div>
        <div>
          <h3 className="text-[#e05f09] mt-3 text-2xl lg:text-4xl font-bold">
            Food Wise Restaurant
          </h3>
          <p className="text-[#383838] text-base font-medium mt-2">
            "Feast for the Senses" - This title promises an immersive culinary
            experience that tantalizes all five senses. From the aroma of
            freshly baked bread to the colorful presentation of each dish, every
            element is carefully crafted to delight the eyes, nose, mouth, ears,
            and even the touch of diners.
            <br />
            From the aroma of freshly baked bread to the colorful presentation
            of each dish, every element is carefully crafted to delight the
            eyes, nose, mouth, ears, and even the touch of diners, and to take
            pleasure in the simple act of eating. It is a powerful reminder that
            food is more than just nourishment, but a gateway to a fulfilling
            life.
          </p>
          <Link to="/booknow">
            <button className="btn btn-outline mt-6 text-[#383838]">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
