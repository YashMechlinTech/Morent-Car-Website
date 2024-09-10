import React, { useState } from "react";
import favouriteImg from "../assets/favourite.svg";
import notificationImg from "../assets/bell.svg";
import settingsImg from "../assets/settings.svg";
import profileImg from "../assets/Profile.svg";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import { Button  } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const Header = ({ onSearch }) => {
  const navigate=useNavigate()
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };
const {logout}=useAuth()
const handleLogout = async () => {
  try {
    const response = await axios.post(
      "http://localhost:8000/auth/logout/",
      {
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    
    if (response.status === 200) {
      // Clear any client-side data (like tokens)
      localStorage.removeItem('authToken');
      logout() //setting the is authenticated to the false/Null 
      
      // Optionally redirect to login or home page
      navigate('/login');  
    } else {
      console.error('Failed to log out:', response.data);
    }
  } catch (error) {
    console.error('Error during logout:', error);
  }
};

  return (
    <header>
      <nav className="flex flex-wrap items-center justify-between p-4 bg-white">
        <div className="flex items-center gap-9 w-full md:w-auto flex-grow">
          <h1 className="text-blue-600 font-bold text-lg md:text-xl font-[Plus Jakarta Sans]">
            MORENT ™
          </h1>
          <div className="border-solid border-gray-400 border-[.5px] rounded-[20px] mt-2">
            <SearchIcon />
            <input
              className="focus:outline-none"
              style={{ border: "none", borderColor: "white", width: "30vw" }}
              type="text"
              placeholder="search for cars"
              onChange={handleInputChange}
            />
            <TuneIcon className="mr-2" />
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <img
            src={favouriteImg}
            alt="Favorites"
            className="h-8 w-8 border border-gray-300 rounded-full p-1"
          />
          <img
            src={notificationImg}
            alt="Notifications"
            className="h-8 w-8 border border-gray-300 rounded-full p-1"
          />
          <img
            src={settingsImg}
            alt="Settings"
            className="h-8 w-8 border border-gray-300 rounded-full p-1 "
          />
          <img src={profileImg} alt="Profile" className="h-8 w-8 border-none" />
          <Button onClick={handleLogout} variant="contained" endIcon={<LogoutIcon />}>
            Logout
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
