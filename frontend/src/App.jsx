import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroCards from "./components/HeroCards";
import Destination from "./components/Destination";
import CarList from "./components/CarList";
import CarDetailsPage from "./components/CarDetailsPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroCards />
                <Destination />
                <CarList />
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
