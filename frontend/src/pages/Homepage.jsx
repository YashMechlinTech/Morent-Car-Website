import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import HeroCards from "../components/HeroCards.jsx";
import CarList from "../components/CarList.jsx";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Tooltip from "@mui/material/Tooltip"; // Import Tooltip component
import RatingComponent from "../components/RatingComponent.jsx";
import ReviewSection from "../components/ReviewComponents.jsx";
import { useNavigate } from "react-router-dom";
import Filter from "../components/Filter.jsx";

const Homepage = () => {
  const navigate = useNavigate();
  const [selectedCar, setSelectedCar] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const handleRentClick = (car) => {
    setSelectedCar(car);
    window.scrollTo({top:0,behavior:'smooth'});
  };

  const handleBackClick = () => {
    setSelectedCar(null);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleNextClick = () => {
    if (selectedCar) {
      navigate(`/payments/${selectedCar.id}`, { state: { car: selectedCar } });
    }
  };

  const handlePickupLocationChange = (location) => {
    setPickupLocation(location);
  };

  const handleDropoffLocationChange = (location) => {
    setDropoffLocation(location);
  };
  return (
    <>
      <Header onSearch={handleSearch} />
      {selectedCar ? (
        <>
          <div className="p-4">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mb-4"
              onClick={handleBackClick}
            >
              Back to Cars
            </button>
            <div className="rounded-lg shadow-md p-4 bg-white">
              {" "}
              <div className="flex">
                <img
                  src={`http://localhost:8000/media/${selectedCar.image_url}`}
                  alt={selectedCar.name}
                  className=" h-40 rounded-lg object-contain mb-4"
                />

                <div className="w-full p-5">
                  <div className="flex justify-between w-full">
                    <h2 className="text-lg font-bold mb-2">
                      {selectedCar.name}
                    </h2>
                    <Tooltip title="This car is checked and it has passed the safetyCheck">
                      <span>
                     
                        <a href="https://www.bncap.in/">
                          <VerifiedUserIcon color="success" />
                        </a>
                      </span>
                    </Tooltip>
                  </div>

                  <RatingComponent />

                  <p className="text-gray-600 mb-4">
                    {selectedCar.description}
                  </p>
                  <div className="w-1/2 flex justify-between m-0 p-0 ">
                    <div>
                      <div>
                        Typecar:{" "}
                        <span className="font-bold">
                          {selectedCar.car_type}
                        </span>
                      </div>
                      <div>
                        Steering:{" "}
                        <span className="font-bold">
                          {selectedCar.steering}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div>
                        Capacity:{" "}
                        <span className="font-bold">
                          {selectedCar.capacity}
                        </span>
                      </div>
                      <div>
                        Gasoline Capacity:{" "}
                        <span className="font-bold">
                          {selectedCar.gasoline_capacity}L
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg  font-bold">
                  ${selectedCar.price}/day
                </span>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={handleNextClick}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          <ReviewSection />
          <CarList
            pickupLocation={pickupLocation}
            dropoffLocation={dropoffLocation}
            searchTerm={searchTerm}
            onRentClick={handleRentClick}
          />
        </>
      ) : (
        <>
          <HeroCards />
          <Filter
            onPickupLocationChange={handlePickupLocationChange}
            onDropoffLocationChange={handleDropoffLocationChange}
          />
          <CarList
            pickupLocation={pickupLocation}
            dropoffLocation={dropoffLocation}
            searchTerm={searchTerm}
            onRentClick={handleRentClick}
          />
        </>
      )}
      <Footer />
    </>
  );
};

export default Homepage;
