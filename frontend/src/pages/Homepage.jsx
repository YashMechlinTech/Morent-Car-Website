import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import HeroCards from '../components/HeroCards.jsx';
import Destination from '../components/Destination.jsx';
import CarList from '../components/CarList.jsx';

const Homepage = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleRentClick = (car) => {
    setSelectedCar(car);
  };

  const handleBackClick = () => {
    setSelectedCar(null);
  };

  return (
    <>
      <Header />
      {selectedCar ? ( <>
        <div className="p-4">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mb-4"
            onClick={handleBackClick}
          >
            Back to Cars
          </button>
          <div className="rounded-lg shadow-md p-4 bg-white">
            <img
              src={`http://localhost:8000/media/${selectedCar.image_url}`}
              alt={selectedCar.name}
              className="w-full h-40 rounded-lg object-cover mb-4"
            />
            <h2 className="text-lg font-bold mb-2">{selectedCar.name}</h2>
            <p className="text-gray-600 mb-4">{selectedCar.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">${selectedCar.price}/day</span>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => console.log(`You have rented ${selectedCar.name}`)}
              >Next</button>
            </div>
          </div>
        </div>
        <CarList onRentClick={handleRentClick} />
        </>
      ) : (
        <>
          <HeroCards />
          <Destination />
          <CarList onRentClick={handleRentClick} />
        </>
      )}
      <Footer />
    </>
  );
};

export default Homepage;
