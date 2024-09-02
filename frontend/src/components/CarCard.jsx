import React from "react";
const baseUrl='http://localhost:8000/media/'
const CarCard = ({ car, onRentClick }) => {
  return (
    <div className="rounded-lg shadow-md p-4 bg-white">
      <img
        src={`${baseUrl}${car.image_url}`}
        alt={car.name}
        className="w-full h-40 rounded-lg object-contain mb-4"
      />
      <h2 className="text-lg font-bold mb-2">{car.name}</h2>
      <p className="text-gray-600 mb-4">{car.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">${car.price}/day</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => onRentClick(car)}
        >
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
