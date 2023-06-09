import React from "react";
import Lottie from "lottie-react";
import healthyFood from "../../assets/healthyFood.json";
import { Link } from "react-router-dom";

const LottieUse = () => {
  return (
    <div>
      <div className="background-color text-center mt-6 lg:pt-20  pt-4">
        <h2 className="text-3xl lg:text-5xl text-center  font-bold text-[#383838]">
       Massage from founder
        </h2>
      </div>
      <div className="mt-6 grid lg:grid-cols-2 gap-4 items-center justify-between lg:px-36 px-2">
        <div>
          <h3 className="text-[#e05f09] text-2xl lg:text-4xl font-bold">
            First, we eat. Then, we do everything else.
          </h3>
          <p className="text-[#383838] text-base font-medium mt-6">
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
          <Link to="/about">
            <button className="btn btn-outline mt-6 text-[#383838]">
              About us
            </button>
          </Link>
        </div>
        <div>
          <div className="flex justify-center">
            <Lottie
              className="w-3/4"
              animationData={healthyFood}
              loop={true}
            ></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LottieUse;
