import React, { useEffect } from "react";
import CarList from "./AllCars";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../redux/cars/carSlice";
const baseUrl = "http://localhost:8000/media/";
const CarDetailsPage = () => {
  const { id } = useParams(); //getting the carid from the url
  const dispatch = useDispatch();
  const { cars, loading } = useSelector((state) => state.cars);

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(fetchCars());
    }
  }, [dispatch, cars.length]);
  
  const car = cars.find((car) => car.id === parseInt(id)); //returing the car with the particular id and but also the

  return (
    <>
      {loading ? <>Loading...</> : <CarCard car={car} />}
      <CarList />
    </>
  );
};

const CarCard = ({ car }) => {
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

export default CarDetailsPage;
