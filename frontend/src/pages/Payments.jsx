import React from "react";
import { useLocation } from "react-router-dom";

const Payments = () => {
  const location = useLocation();
  const { car } = location.state;
  if (!car) {
    return <div>No car Data Availiable Please try again later. </div>;
  }
  return <div>Payments page start here . </div>;
};

export default Payments;
