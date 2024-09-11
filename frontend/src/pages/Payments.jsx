import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Payments = () => {
  const location = useLocation();
  const { car } = location.state;
  if (!car) {
    return <div>No car Data Availiable Please try again later. </div>;
  }
  return <>
  <Header/>
  Payments Start here. 
  <Footer/>
  
  </>
};

export default Payments;
