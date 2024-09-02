import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroCards from "./components/HeroCards";
import Destination from "./components/Destination";
import CarList from "./components/AllCars";
import CarDetailsPage from "./components/CarDetailsPage";
import { useState } from "react";
import SidebarFilter from "./components/SidebarFilter";
import AllCars from "./components/AllCars";



function App() {
  const[sidebarVisible,setSidebarVisible]=useState(false)
  return (
    <>
      <BrowserRouter>
        <Header sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}/>
        {sidebarVisible && <SidebarFilter />}

        <Routes>
          <Route
            path="/"
            element={
              <> {sidebarVisible?<SidebarFilter/>:<></>}
                <HeroCards />
                <Destination />
                <AllCars/>
              </>
            }
          />
          <Route path="/car/:id" element={<CarDetailsPage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
