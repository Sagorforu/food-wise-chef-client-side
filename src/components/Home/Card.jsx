import React from "react";
import { FaCalendarPlus, FaHeart, FaListOl } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "react-router-dom";

const Card = ({ chef }) => {
  const { id, numberOfRecipes, chefName, experience, recipes, likes, chefPicture } = chef;

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <LazyLoadImage effect="blur" src={chefPicture} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#383838]">{chefName}</h2>
        <p className="flex items-center gap-2">
          <FaCalendarPlus />{" "}
          <span className="text-[#383838]">
            Experiences:{" "}
            <span className="font-semibold text-[#e05f09]">
              {experience} Years
            </span>
          </span>
        </p>
        <p className="flex items-center gap-2">
          <FaListOl />{" "}
          <span className="text-[#383838]">
            Numbers of recipes:
            <span className="font-semibold ms-2 text-[#e05f09]">
              {numberOfRecipes}
            </span>
          </span>
        </p>
        <div className="card-actions justify-end flex items-center">
          <p className="flex items-center gap-2">
            {" "}
            <FaHeart /> <span className="text-[#383838]">Likes: </span>{" "}
            <span className="font-semibold text-[#e05f09]">{likes}</span>
          </p>
          <Link to={`/chefdata/${id}`}>
            <button className="btn btn-outline text-[#383838]">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
