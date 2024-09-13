import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import notificationImg from "../assets/bell.svg";
import settingsImg from "../assets/settings.svg";
import profileImg from "../assets/Profile.svg";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Alert,
  Snackbar,
  TextField,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Header = ({ onSearch }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [modalOpen, setModalOpen] = useState(false); //
  const [favoriteCars, setFavoriteCars] = useState([]);

  const navigate = useNavigate();
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/logout/",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        //setting the is authenticated to the false/Null
        // Show success message
        setSnackbarMessage("Logout successful!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        // Optionally redirect to login or home page
        setTimeout(() => {
          logout();
        }, 1000);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        console.error("Failed to log out:", response.data);
        setSnackbarMessage("Logout failed. Please try again.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Error during logout:", error);
      setSnackbarMessage("Error during logout. Please try again.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleFavoriteClick = async () => {
    // Open the modal
    setModalOpen(true);

    // Fetch the favorite cars from the backend
    try {
      const response = await axios.get("http://localhost:8000/cars/favorites/");
      if (response.status === 200) {
        setFavoriteCars(response.data); // Set the favorite cars
      }
    } catch (error) {
      console.error("Error fetching favorite cars:", error);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const baseUrl = "http://localhost:8000/";

  return (
    <header>
      <nav className="flex flex-wrap items-center justify-between p-4   bg-white">
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
              placeholder="Search for cars...  "
              onChange={handleInputChange}
            />
            <TuneIcon className="mr-2" />
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <FavoriteBorderIcon
            sx={{
              borderColor: "rgb(209, 213, 219)",
              borderRadius: "50%",
              borderWidth: "1px",
              fontSize: "30px",
              padding: "3px",
            }}
            onClick={handleFavoriteClick} //opening the modal on click and showing the user favorites cars.
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
          <Button
            onClick={handleLogout}
            variant="contained"
            endIcon={<LogoutIcon />}
            sx={{
              fontFamily: "monospace",
            }}
          >
            Logout
          </Button>
        </div>
      </nav>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <Modal
  open={modalOpen}
  onClose={handleCloseModal}
  aria-labelledby="favorites-modal-title"
  aria-describedby="favorites-modal-description"
>
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 500, // Increase the width for more space
      bgcolor: 'background.paper',
      borderRadius: 4, // Smooth rounded corners
      boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)', // Softer shadow
      p: 4,
      maxHeight: '80vh', // Constrain the height for large lists
      overflowY: 'auto', // Add scroll if content overflows
    }}
  >
    <Typography id="favorites-modal-title" variant="h5" component="h2" align="center" gutterBottom>
      Your Favorite Cars
    </Typography>

    {favoriteCars.length > 0 ? (
      favoriteCars.map((car) => (
        <Box
          key={car.id}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            mb: 3,
            p: 2,
            bgcolor: '#f9f9f9', // Slightly gray background for each car card
            borderRadius: 3,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
          }}
        >
          <Box
            component="img"
            src={`${baseUrl}${car.image_url}`}
            alt={car.name}
            sx={{
              width: '45%',
              height: '45%',
              borderRadius: 2,
              objectFit: 'contain', 
              mr:4,
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" fontWeight="bold">
              {car.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {car.description}
            </Typography>
            <Typography variant="body1" color="primary" fontWeight="bold">
              ${car.price} / day
            </Typography>
          </Box>
        </Box>
      ))
    ) : (
      <Typography align="center" color="text.secondary">
        You have no favorite cars yet.
      </Typography>
    )}
  </Box>
</Modal>

    </header>
  );
};

export default Header;
