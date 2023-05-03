import React from "react";
import { FaCalendarPlus, FaHeart, FaListOl } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Recipes from "./Recipes";

const ViewDetails = () => {
  const chefRecipes = useLoaderData();
  const {
    bio,
    chefName,
    chefPicture,
    experience,
    likes,
    numberOfRecipes,
    recipes,
  } = chefRecipes;

  return (
    <div className="my-8">
      <div className="bg-orange-100 bg-opacity-30 pt-4 pb-16 lg:px-36 px-2">
        <h2 className="text-center my-10 font-bold text-[#383838] text-3xl">
          Chef Details
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 shadow-2xl p-6 rounded-lg items-center lg:gap-10 gap-4">
          <div>
            <img className="rounded-2xl mx-auto" src={chefPicture} alt="" />
          </div>
          <div className="col-span-2 p-4">
            <h2 className="font-bold text-[#383838] text-2xl lg:text-4xl">
              {" "}
              {chefName}
            </h2>
            <p className="text-base font-medium mt-4">
              <span className="font-bold text-[#383838]">Bio:</span> {bio}
            </p>
            <p className="flex font-semibold lg:font-bold text-xl lg:text-2xl mt-6 lg:mt-32 items-center gap-2">
              <FaCalendarPlus className="text-[#383838]" />{" "}
              <span className="text-[#383838]">
                Experiences:{" "}
                <span className="font-semibold text-[#e05f09]">
                  {experience} Years
                </span>
              </span>
            </p>
            <p className="flex font-semibold lg:font-bold text-xl lg:text-2xl mt-4 items-center gap-2">
              <FaListOl className="text-[#383838]" />{" "}
              <span className="text-[#383838]">
                Numbers of recipes:
                <span className="font-semibold ms-2 text-[#e05f09]">
                  {numberOfRecipes}
                </span>
              </span>
            </p>
            <p className="flex font-semibold lg:font-bold text-xl lg:text-2xl mt-4 items-center gap-2">
              {" "}
              <FaHeart className="text-[#383838]" />{" "}
              <span className="text-[#383838]">Likes: </span>{" "}
              <span className="font-semibold text-[#e05f09]">{likes}</span>
            </p>
          </div>
        </div>
      </div>
      {/* Recipes details here */}
      <div className="">
        <h2 className="text-center lg:px-36 px-2 my-12 font-bold text-[#383838] text-3xl">{chefName}'s Recipes</h2>
        <div className="">
            {
                recipes.map(recipe => <Recipes
                key={recipe.recipeName}
                recipe={recipe}
                ></Recipes>)
            }
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
