import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from "../redux/cars/carSlice";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const baseUrl = "http://localhost:8000/media/";
import Paper from "@mui/material/Paper";
import axios from "axios";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Tooltip } from "@mui/material";

const CarList = ({ searchTerm, onRentClick, pickupLocation }) => {
  const dispatch = useDispatch();
  const { cars, loading, error } = useSelector((state) => state.cars);

  const [visibleCars, setVisibleCars] = useState(8);
  const [showAll, setShowAll] = useState(false);

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

  const locationFilteredCars = pickupLocation
    ? cars.filter(
        (car) => car.location.toLowerCase() === pickupLocation.toLowerCase()
      )
    : cars;

  // Filtering the cars  cars based on searchTerm
  const filteredCars = locationFilteredCars.filter(
    (car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowAllCars = () => {
    setShowAll(!showAll);
    setVisibleCars(showAll ? 4 : filteredCars.length);
  };

  return (
    <>
      <div className="w-full flex  p-4 font-medium justify-between">
        <div className="text-gray-400 font-normal">Popular car</div>
        <div
          className= "cursor-pointer"
          style={{color:'#FF90BC'}}
          onClick={handleShowAllCars}
        >
          {showAll ? "Show Less Cars" : "Show All Cars"}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCars.slice(0, visibleCars).map((car) => (
          <CarCard key={car.id} car={car} onRentClick={onRentClick} />
        ))}
      </div>
    </>
  );
};

const CarCard = React.memo(({ car, onRentClick }) => {
  const [isFavorited, setIsFavorited] = useState(car.isFavourite);
  const handleFavoriteClick = useCallback(async () => {
    try {
      const response = await axios.post(
        `http://localhost:8000/cars/${car.id}/toggle_favorite/`
      );
      setIsFavorited(response.data.isFavourite);
    } catch (error) {
      console.error("Error toggling favorite: ", error);
    }
  }, [car.id]);

  return (
    <Tooltip
      title={
        <div style={{ padding: "5px", maxWidth: "300px" }}>
          <h3>{car.name}</h3>
          <p>Type: {car.car_type}</p>
          <p>Gasoline Capacity: {car.gasoline_capacity}L</p>
          <p>Description:{car.description}</p>
          <p>Steering: {car.steering}</p>
          <p>Capacity: {car.capacity}</p>
          <p>Price: ${car.price}/day</p>
        </div>
      }
      placement="top"
      arrow
    >
      <Paper elevation={2} className="rounded-full p-4 bg-white">
        {" "}
        {/* Replace shadow-2xl with Paper and elevation */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 className="text-lg font-bold mb-0">{car.name}</h2>
          <div onClick={handleFavoriteClick}>
            {isFavorited ? (
              <FavoriteIcon sx={{ color: "#FF90BC", cursor: "pointer" }} />
            ) : (
              <FavoriteBorderOutlinedIcon sx={{ cursor: "pointer" }} />
            )}
          </div>
        </div>
        <div className="text-gray-400 ml-1 font-medium">{car.car_type}</div>
        <img
          src={`${baseUrl}${car.image_url}`}
          alt={car.name}
          className="w-full h-40 rounded-lg object-contain mb-4"
          onClick={() => onRentClick(car)}
        />
        <div className="flex justify-between items-center">
          <div>
            <LocalGasStationIcon sx={{ color: "green" }} />
            <span style={{ fontWeight: "bold", color: "GrayText" }}>
              {car.gasoline_capacity}L
            </span>
          </div>

          <div>
            <BuildCircleOutlinedIcon sx={{ color: "green" }} />
            <span style={{ fontWeight: "bold", color: "GrayText" }}>
              {car.steering}
            </span>
          </div>

          <div>
            <PeopleAltOutlinedIcon sx={{ color: "green" }} />
            <span style={{ fontWeight: "bold", color: "GrayText" }}>
              {car.capacity}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${car.price}/day</span>
          <button
            className="bg-blue-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full"
            style={{backgroundColor:'#FF90BC'}}
            onClick={() => onRentClick(car)}
          >
            Rent Now
          </button>
        </div>
      </Paper>
    </Tooltip>
  );
});
export default CarList;
