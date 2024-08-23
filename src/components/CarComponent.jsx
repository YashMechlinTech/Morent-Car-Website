import React from 'react';
import car1 from '../assets/Car-1.svg'
const CarCard = ({ car, onRentClick }) => {
  return (
    <div className="rounded-lg shadow-md p-4 bg-white">
      <img src={car.imageUrl} alt={car.name} className="w-full h-40 rounded-lg object-cover mb-4" />
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

const CarList = () => {
  const cars = [
    {
      name: 'Koenigsegg',
      imageUrl: {car1},
      description: 'A supercar with incredible speed and performance.',
      price: 99.00,
    },
    {
      name: 'Nissan GT-R',
      imageUrl: 'https://www.car-pictures.net/car-pictures/Nissan/Nissan-GT-R-R35-2017.jpg',
      description: 'A powerful and stylish sports car.',
      price: 80.00,
    },
    {
      name: 'Rolls-Royce',
      imageUrl: 'https://www.car-pictures.net/car-pictures/Rolls-Royce/Rolls-Royce-Phantom-2017.jpg',
      description: 'A luxurious and elegant sedan.',
      price: 96.00,
    },
    {
      name: 'Nissan GT-R',
      imageUrl: 'https://www.car-pictures.net/car-pictures/Nissan/Nissan-GT-R-R35-2017.jpg',
      description: 'A powerful and stylish sports car.',
      price: 90.00,
    },
    {
      name: 'All New Rush',
      imageUrl: 'https://www.car-pictures.net/car-pictures/Toyota/Toyota-Rush-2018.jpg',
      description: 'A spacious and versatile SUV.',
      price: 72.00,
    },
    {
      name: 'CR-V',
      imageUrl: 'https://www.car-pictures.net/car-pictures/Honda/Honda-CR-V-2017.jpg',
      description: 'A popular and reliable compact SUV.',
      price: 80.00,
    },
    {
      name: 'All New Terios',
      imageUrl: 'https://www.car-pictures.net/car-pictures/Daihatsu/Daihatsu-Terios-2018.jpg',
      description: 'A compact and affordable SUV.',
      price: 74.00,
    },
    {
      name: 'CR-V',
      imageUrl: 'https://www.car-pictures.net/car-pictures/Honda/Honda-CR-V-2017.jpg',
      description: 'A popular and reliable compact SUV.',
      price: 80.00,
    },
    {
      name: 'MOX Excite',
      imageUrl: 'https://www.car-pictures.net/car-pictures/Mazda/Mazda-CX-3-2017.jpg',
      description: 'A stylish and sporty compact SUV.',
      price: 76.00,
    },
    {
      name: 'New MG ZS',
      imageUrl: 'https://www.car-pictures.net/car-pictures/MG/MG-ZS-2018.jpg',
      description: 'A modern and affordable SUV.',
      price: 80.00,
    },
    {
      name: 'MOX Excite',
      imageUrl: 'https://www.car-pictures.net/car-pictures/Mazda/Mazda-CX-3-2017.jpg',
      description: 'A stylish and sporty compact SUV.',
      price: 76.00,
    },
    {
      name: 'New MG ZS',
      imageUrl: 'https://www.car-pictures.net/car-pictures/MG/MG-ZS-2018.jpg',
      description: 'A modern and affordable SUV.',
      price: 80.00,
    },
  ];

  const handleRentClick = (car) => {
    console.log(`You have rented ${car.name}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cars.map((car) => (
        <CarCard key={car.name} car={car} onRentClick={handleRentClick} />
      ))}
    </div>
  );
};

export default CarList;