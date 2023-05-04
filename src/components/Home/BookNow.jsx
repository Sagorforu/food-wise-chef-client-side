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
            <img className="rounded-2xl" src="https://i.ibb.co/xJcFScw/picture3.jpg" alt="" />
          </div>
        </div>
        <div>
          <h3 className="text-[#e05f09] mt-3 text-2xl lg:text-4xl font-bold">
            Food Wise Restaurant
          </h3>
          <p className="text-[#383838] text-base font-medium mt-2">
            The quote "First, we eat. Then, we do everything else" by M.F.K.
            Fisher encapsulates the idea that food is not just a means of
            sustenance but a fundamental part of our daily lives. It highlights
            the importance of nourishing ourselves before we can tackle the
            demands of the day ahead.
            <br />
            This quote reminds us to prioritize our health and well-being, to
            savor our meals, and to take pleasure in the simple act of eating.
            It is a powerful reminder that food is more than just nourishment,
            but a gateway to a fulfilling life.
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
