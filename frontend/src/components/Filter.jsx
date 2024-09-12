import React, { useState } from "react";
import { Grid, TextField, MenuItem, Typography, IconButton } from "@mui/material";
import SwapVertIcon from '@mui/icons-material/SwapVert';
const Filter = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");


  const handlePickupLocationChange = (event) => {
    setPickupLocation(event.target.value);
  };

  const handlePickupDateChange = (event) => {
    setPickupDate(event.target.value);
  };

  const handlePickupTimeChange = (event) => {
    setPickupTime(event.target.value);
  };

  const handleDropoffLocationChange = (event) => {
    setDropoffLocation(event.target.value);
  };

  const handleDropoffDateChange = (event) => {
    setDropoffDate(event.target.value);
  };

  const handleDropoffTimeChange = (event) => {
    setDropoffTime(event.target.value);
  };

const handleswapfunctionality=()=>{
 console.log('button is clicked. ')
}

  return (
    <Grid container spacing={1} alignItems="center"     justifyContent="center" sx={{justifyContent:'space-around',marginRight:'16px'}}>
      {/* Pickup Section */}
      <Grid item xs={12} md={4} lg={5}  >
        <TextField 
        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '16px' } }} 
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
      <Grid item xs={12} md={1}  container justifyContent="center" alignItems="center">
        <IconButton onClick={handleswapfunctionality}>
         <SwapVertIcon  color="primary"fontSize="large"  />
        </IconButton>
      </Grid>

      {/* Dropoff Section */}
      <Grid item xs={12} md={4} lg={5}>
        <TextField
        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '16px' } }} 
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
