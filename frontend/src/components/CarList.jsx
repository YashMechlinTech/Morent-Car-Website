import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../redux/cars/carSlice';

const baseUrl = "http://localhost:8000/media/";

const CarList = ({searchTerm, onRentClick }) => {
  const dispatch = useDispatch();
  const { cars, loading, error } = useSelector((state) => state.cars);

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(fetchCars());
    }
  }, [dispatch, cars.length]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading cars. Please try again later.</div>;
  }

  if (cars.length === 0) {
    return <div>No cars available</div>;
  }

  // Filter cars based on searchTerm
  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.description.toLowerCase().includes(searchTerm.toLowerCase())|| car.location.toLowerCase().includes(searchTerm.toLowerCase())||car.car_type.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredCars.map((car) => (
        <CarCard key={car.id} car={car} onRentClick={onRentClick} />
      ))}
    </div>
  );
};

const CarCard = React.memo(({ car, onRentClick }) => {
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
});

export default CarList;
