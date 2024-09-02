import React, { useState } from "react";
import searchicon from "../assets/searchicon.png";
import favouriteImg from "../assets/favourite.svg";
import notificationImg from "../assets/bell.svg";
import settingsImg from "../assets/settings.svg";
import profileImg from "../assets/Profile.svg";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {

  return (
    <header>
      <nav className="flex flex-wrap items-center justify-between p-4 bg-white">
        <div className="flex items-center gap-9 w-full md:w-auto flex-grow">
          <h1 className="text-blue-600 font-bold text-lg md:text-xl font-[Plus Jakarta Sans]">
            MORENT
          </h1>
          <div className="border-solid border-gray-400 border-[.5px] rounded-[20px]  ">
            <SearchIcon />
            <input
              className="focus:outline-none"
              style={{ border: "none", borderColor: "white", width: "35vw" }}
              type="text"
              name=""
              id=""
              placeholder="search for cars"
            />
            <TuneIcon className="mr-2"/>
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
