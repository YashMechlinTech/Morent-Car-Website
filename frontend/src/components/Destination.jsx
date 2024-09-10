import React, { useState } from "react";
import { Grid, TextField, MenuItem, Typography, IconButton } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SwapVertIcon from '@mui/icons-material/SwapVert';
const Destination = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");

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

  return (
    <Grid container spacing={2}alignItems="center" justifyContent="center" sx={{justifyContent:'space-around',marginRight:'16px'}}>
      {/* Pickup Section */}
      <Grid item xs={12} md={2} lg={1} >
        <Typography variant="body1"> Location</Typography>
        <TextField 
        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '16px' } }} 
          select
          value={pickupLocation}
          onChange={handlePickupLocationChange}
          fullWidth
          margin="normal"
          variant="outlined"
         
        >
          <MenuItem value="">Select your city</MenuItem>
          <MenuItem value="New York">New York</MenuItem>
          <MenuItem value="Los Angeles">Los Angeles</MenuItem>
          <MenuItem value="Chicago">Chicago</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} md={2} lg={1}>
        <Typography variant="body1">Pickup Date</Typography>
        <TextField
        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '16px' } }} 
          type="date"
          value={pickupDate}
          onChange={handlePickupDateChange}
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={12} md={2} lg={1}>
        <Typography variant="body1">Pickup Time</Typography>
        <TextField
        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '16px' } }} 
          type="time"
          value={pickupTime}
          onChange={handlePickupTimeChange}
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>

      {/* Separator */}
      <Grid item xs={12} md={1}  container justifyContent="center" alignItems="center">
        <IconButton>
         <SwapVertIcon color="primary"fontSize="large"  />
        </IconButton>
      </Grid>

      {/* Dropoff Section */}
      <Grid item xs={12} md={2} lg={1}>
        <Typography variant="body1"> Location</Typography>
        <TextField
        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '16px' } }} 
          select
          value={dropoffLocation}
          onChange={handleDropoffLocationChange}
          fullWidth
          margin="normal"
          variant="outlined"
        >
          <MenuItem value="">Select your city</MenuItem>
          <MenuItem value="New York">New York</MenuItem>
          <MenuItem value="Los Angeles">Los Angeles</MenuItem>
          <MenuItem value="Chicago">Chicago</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} md={2} lg={1}>
        <Typography variant="body1">Dropoff Date</Typography>
        <TextField
        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '16px' } }} 
          type="date"
          value={dropoffDate}
          onChange={handleDropoffDateChange}
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={12} md={2} lg={1}>
        <Typography variant="body1">Dropoff Time</Typography>
        <TextField
        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '16px' } }} 
          type="time"
          value={dropoffTime}
          onChange={handleDropoffTimeChange}
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
    </Grid>
  );
};

export default Destination;
