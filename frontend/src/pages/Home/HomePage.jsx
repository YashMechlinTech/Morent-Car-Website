import React from "react";
import HeroCards from "../../components/HeroCards";
import AllCars from "../../components/AllCars";
import Destination from "../../components/Destination";

const HomePage = () => {
  return (
    <>
      <HeroCards />
      <Destination />
      <AllCars />
    </>
  );
};

export default HomePage;
