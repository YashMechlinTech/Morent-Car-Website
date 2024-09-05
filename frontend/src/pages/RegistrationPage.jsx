import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    driversLicense: "",
    licenseExpiry: "",
    age: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Add logic to submit the form data, e.g., API call
  };

  return (
    <Container maxWidth="md" >
      <Typography
        variant="h1"
        align="center"
        style={{
          fontWeight: "bold",
          fontSize: "40px",
          marginBottom: "2vh",
          color: "rgb(37 99 235)",
        }}
      >
        Morent ™
      </Typography>

      <Paper elevation={3} style={{ padding: 20, borderRadius: "20px" }}>
        <form onSubmit={handleSubmit}>
          <Typography
            variant="h5"
            align="center"
            style={{ fontWeight: "bold" }}
          >
            User Registration
          </Typography>
          <Grid container spacing={2}>
            {/* Full Name */}
            <Grid item xs={12} >
              <TextField
                label="Full Name"
                name="fullName"
                variant="outlined"
                fullWidth
                required
                value={formData.fullName}
                onChange={handleChange}
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12}>
              <TextField
                label="Email Address"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                required
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>

            {/* Password */}
            <Grid item xs={12}>
              <TextField
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                required
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>

            {/* Confirm Password */}
            <Grid item xs={12}>
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                variant="outlined"
                fullWidth
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </Grid>

            {/* Phone Number */}
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                name="phone"
                type="tel"
                variant="outlined"
                fullWidth
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>

            {/* Driver's License */}
            <Grid item xs={12}>
              <TextField
                label="Driver's License Number"
                name="driversLicense"
                variant="outlined"
                fullWidth
                required
                value={formData.driversLicense}
                onChange={handleChange}
              />
            </Grid>

            {/* License Expiry Date */}
            <Grid item xs={12}>
              <TextField
                label="License Expiry Date"
                name="licenseExpiry"
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true, // To ensure the label doesn't overlap with the selected date
                }}
                required
                value={formData.licenseExpiry}
                onChange={handleChange}
              />
            </Grid>

            {/* Age */}
            <Grid item xs={12}>
              <TextField
                label="Age"
                name="age"
                type="number"
                variant="outlined"
                fullWidth
                required
                value={formData.age}
                onChange={handleChange}
              />
            </Grid>

            {/* Agree to Terms */}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                  />
                }
                label="I agree to the Terms and Conditions"
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  backgroundColor: "rgb(37 99 235)",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "rgb(37 99 235)",
                    border: "1px solid rgb(37 99 235)",
                  },
                }}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default RegistrationPage;
