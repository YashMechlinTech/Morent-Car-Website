import React from "react";
import LamboImg from "../assets/Lambo.svg";
import LamboTwoImg from "../assets/LamboTwo.svg";
const HeroCards = () => {
  return (
    <>
      <div className="m-0 flex gap-2 m-2">
        <div
          style={{ backgroundColor: "rgb(84, 166, 255)" }}
          className="relative w-[50vw] h-[50vh] rounded-xl "
        >
          <div className="w-8/12">
            <p className="text-white font-[Plus Jakarta Sans] text-[3vw] mt-3">
              The best platform for car rental.
            </p>
            <p className="text-white font-[Plus Jakarta Sans] text-[1.50vw] p-3">
              Ease of doing a car rental safely and reliably{" "}
            </p>

            <button
              className="ml-[1vw] top-[20vh] left-0  text-white p-2 rounded-md "
              style={{ backgroundColor: "hsl(225, 80%, 56%)" }}
            >
              Rental Car
            </button>
            <img
              src={LamboImg}
              className="absolute top-[30vh] left-[11vw] w-[34vw] "
              alt=""
            />
          </div>
        </div>


        {/* now for right side card  */}

        <div
          style={{ backgroundColor: "hsl(225, 80%, 56%)" }}
          className="relative w-[50vw] h-[50vh] rounded-xl "
        >
          <div className="w-8/12">
            <p className="text-white font-[Plus Jakarta Sans] text-[3vw] mt-3">
              Easy way to rent a car at low price.
            </p>
            <p className="text-white font-[Plus Jakarta Sans] text-[1.50vw] p-3">
              Provide cheap car rental services and safe and comfortable
              services.{" "}
            </p>

            <button
              className="ml-[1vw] top-[20vh] left-0  text-white p-2 rounded-md"
              style={{ backgroundColor: "rgb(84, 166, 255)" }}
            >
              Rental Car
            </button>
            <img
              src={LamboTwoImg}
              className="absolute top-[30vh] left-[15vw] w-[28vw] "
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCards;
