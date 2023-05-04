import React from "react";
import Header from "../Header/Header";
import LottieUse from "./LottieUse";
import ChefCard from "./ChefCard";
import Support from "./Support";
import BookNow from "./BookNow";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <LottieUse></LottieUse>
      <ChefCard></ChefCard>
      <BookNow></BookNow>
      <Support></Support>
    </div>
  );
};

export default Home;
