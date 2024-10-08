import React, { useState } from "react";
import {
  Grid,
  TextField,
  MenuItem,
  IconButton,
  InputAdornment,
} from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import NavigationOutlinedIcon from "@mui/icons-material/NavigationOutlined";

const Filter = ({ onPickupLocationChange, onDropoffLocationChange }) => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");

  const handlePickupLocationChange = (event) => {
    const newPickupLocation = event.target.value;
    setPickupLocation(newPickupLocation);
    onPickupLocationChange(newPickupLocation);
  };

  const handleDropoffLocationChange = (event) => {
    const newDropoffLocation = event.target.value;
    setDropoffLocation(newDropoffLocation);
    onDropoffLocationChange(newDropoffLocation);
  };

  const handleswapfunctionality = () => {
    setPickupLocation(dropoffLocation);
    onPickupLocationChange(dropoffLocation);
    setDropoffLocation(pickupLocation);
    onDropoffLocationChange(pickupLocation);
  };

  return (
    <Grid
      container
      spacing={1}
      alignItems="center"
      justifyContent="center"
      sx={{ justifyContent: "space-around", marginRight: "16px" }}
    >
      {/* Pickup Section */}
      <Grid item xs={12} md={4} lg={5}>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <NavigationOutlinedIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": { borderRadius: "16px" },
            "& .MuiSelect-select": {
              fontSize: "18px",
            },
          }}
          select
          value={pickupLocation}
          onChange={handlePickupLocationChange}
          fullWidth
          margin="normal"
          variant="outlined"
          label="Pick Up Location"
        >
          <MenuItem value="">Select your city</MenuItem>
          <MenuItem value="New York">New York</MenuItem>
          <MenuItem value="Los Angeles">Los Angeles</MenuItem>
          <MenuItem value="Chicago">Chicago</MenuItem>
        </TextField>
      </Grid>

      {/* Separator */}
      <Grid
        item
        xs={12}
        md={1}
        container
        justifyContent="center"
        alignItems="center"
      >
        <IconButton onClick={handleswapfunctionality}>
          <SwapVertIcon sx={{color:'white',backgroundColor:'#FF90BC',borderRadius:"25%",
            padding:"" ,
            fontSize:'50px'}} fontSize="large" />
        </IconButton>
      </Grid>

      {/* Dropoff Section */}
      <Grid item xs={12} md={4} lg={5}>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PushPinOutlinedIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": { borderRadius: "16px", },
            "& .MuiSelect-select": {
              fontSize: "18px",
              borderColor:'#FF90BC'
            },
          }}
          select
          value={dropoffLocation}
          onChange={handleDropoffLocationChange}
          fullWidth
          label="Dropoff Location"
          margin="normal"
          variant="outlined"
        >
          <MenuItem value="">Select your city</MenuItem>
          <MenuItem value="New York">New York</MenuItem>
          <MenuItem value="Los Angeles">Los Angeles</MenuItem>
          <MenuItem value="Chicago">Chicago</MenuItem>
        </TextField>
      </Grid>
    </Grid>
  );
};

export default Filter;
