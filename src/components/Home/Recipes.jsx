import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaUtensils } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Recipes = ({ recipe }) => {
  const [favorite, setFavorite] = useState(false);
  const { recipeName, ingredients, cookingMethod, rating, image } = recipe;

  const handleFavorite = () => {
    setFavorite(true);
    toast('Added to favorite')
  }

  return (
    <div className="mb-20">
      <div className="p-4 flex justify-center">
      <LazyLoadImage className="mx-auto rounded-lg" effect="blur" src={image} alt="" />
      </div>
      <div className="bg-orange-100 bg-opacity-30 rounded-2xl shadow-xl lg:py-16 py-8 p-4 my-6">
        <div className="lg:px-36 px-2">
          <div className="flex items-center justify-around">
            <h2 className="font-bold flex items-center text-[#383838] text-xl lg:text-4xl"><FaUtensils /> <span className="ms-1 lg:ms-4">{recipeName}</span>
            </h2>
            <h4 className="font-bold lg:text-2xl flex items-center">
              <Rating className="me-1 lg:me-4" style={{ maxWidth: 150 }} value={rating} readOnly />
              {rating}
            </h4>
          </div>
          <p className="mt-4 text-[#383838]">
            <span className="font-bold text-lg lg:text-2xl">Ingredients</span>
            {ingredients.map((list) => (
              <li>{list}</li>
            ))}
          </p>
          <h2 className="font-bold mt-4 text-[#383838] text-xl lg:text-4xl">
            <span className="font-semibold lg:font-bold text-lg lg:text-xl">Cooking Method: </span>
            <span className="font-normal text-base lg:text-xl">{cookingMethod}</span>
          </h2>
          <div className="text-center mt-8">
          <button onClick={handleFavorite} disabled={favorite} className="btn btn-outline text-[#383838]">Add to Favorite</button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Recipes;
