import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../redux/cars/carSlice';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
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


  return (<>
<div  className='w-full flex p-4 font-medium justify-between'>
<div className='text-gray-400 font-normal'>Popular car</div>
<div className='text-blue-500'>View All </div>
</div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredCars.map((car) => (
        <CarCard key={car.id} car={car} onRentClick={onRentClick} />
      ))}
    </div>
    </>
  );
};

const CarCard = React.memo(({ car, onRentClick }) => {
  return (
    <div className="rounded-lg shadow-2xl p-4 bg-white">
      <div style={{display:'flex', justifyContent:'space-between'}}> <h2 className="text-lg font-bold mb-2">{car.name}</h2>
      <FavoriteBorderOutlinedIcon/></div>
       
      <img
        src={`${baseUrl}${car.image_url}`}
        alt={car.name}
        className="w-full h-40 rounded-lg object-contain mb-4"
      />
     
      <div className='flex justify-evenlyitems-center'>
       <div><LocalGasStationIcon sx={{color:'green'}}/> <span style={{fontWeight:'bold',color:'GrayText'}}>{car.gasoline_capacity}L</span></div>

       <div><BuildCircleOutlinedIcon sx={{color:'green'}}/> <span style={{fontWeight:'bold',color:'GrayText'}}>{car.steering}</span></div>

       <div><PeopleAltOutlinedIcon sx={{color:'green'}}/> <span style={{fontWeight:'Bold',color:'GrayText'}}>{car.capacity}</span></div>


      </div>


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
