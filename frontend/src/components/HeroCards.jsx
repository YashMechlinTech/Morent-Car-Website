import React from "react";
import LamboImg from "../assets/Lambo.svg";
import LamboTwoImg from "../assets/LamboTwo.svg";
const HeroCards = () => {
  return (
    <>
      <div className="flex gap-2 m-2">
        <div
          style={{ backgroundColor: "rgb(84, 166, 255)" }}
          className="relative w-[50vw] h-[50vh] rounded-xl "
        >
          <div className="w-8/12">
            <p className="text-white font-[Plus Jakarta Sans] text-[3vw] mt-3 ml-2.5">
              The best platform for car rental.
            </p>
            <p className="text-white font-[Plus Jakarta Sans] text-[1.75vw] p-3">
              Ease of doing a car rental safely and reliably{" "}
            </p>

            <button
              className="ml-[1vw] top-[20vh] left-0  text-white p-1.5 rounded-md ml-2.5"
              style={{ backgroundColor: "hsl(225, 80%, 56%)" }}
            >
              Rental Car
            </button>
            <img
              src={LamboImg}
              className="absolute top-[30vh] left-[13.5vw] w-[34vw] "
              alt=""
            />
          </div>
        </div>

       

        <div
          style={{ backgroundColor: "hsl(225, 80%, 56%)" }}
          className="relative w-[50vw] h-[50vh] rounded-xl "
        >
          <div className="w-8/12">
            <p className="text-white font-[Plus Jakarta Sans] text-[3vw] mt-3 ml-2.5">
              Easy way to rent a car at low price.
            </p>
            <p className="text-white font-[Plus Jakarta Sans] text-[1.75vw] p-3">
              Provide cheap car rental services and safe and comfortable
              services.{" "}
            </p>

            <button
              className="ml-[1vw] top-[20vh] left-0  text-white p-1.5 rounded-md ml-2.5"
              style={{ backgroundColor: "rgb(84, 166, 255)" }}
            >
              Rental Car
            </button>
            <img
              src={LamboTwoImg}
              className="absolute top-[30vh] left-[18vw] w-[28vw] "
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCards;
