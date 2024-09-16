import React from "react";
import { useLocation } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Grid, TextField, Typography } from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";

const Payments = () => {
  const location = useLocation();
  const { car } = location.state;
  if (!car) {
    return <div>No car Data Availiable Please try again later. </div>;
  }
  return (
    <>
      <Header />
      <Grid container>
        <Grid container className="p-4 " direction={"column"}>
          <Typography className="text-[3vh]" sx={{ fontWeight: "bold" }}>
            Billing Info
          </Typography>
          <Typography className="text-gray-400">
            Please enter your billing info.{" "}
          </Typography>
          <Grid
            container
            className="p-4"
            gap={2}
            flexWrap={true}
            justifyContent={"space-end"}
          >
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BadgeIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter Your Name"
              label="Your Name"
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalPhoneIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter Phone"
              label="Phone Number "
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HomeIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter Address"
              label=" Enter Your address "
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationCityIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Town/City"
              label="Address Town City "
            />
          </Grid>
        </Grid>{" "}
        {/* first block container is ending here. */}
        {/* 2nd block */}
        <Grid container className="p-4 " direction={"column"}>
          <Typography className="text-[3vh]" sx={{ fontWeight: "bold" }}>
            Rental Info
          </Typography>
          <Typography className="text-gray-400">
            Please select your Rental Date and location.{" "}
          </Typography>
          <Grid
            container
            className="p-4"
            gap={2}
            flexWrap={true}
            justifyContent={"space-end"}
          >

            



          </Grid>
        </Grid>
        {/* second container is ending here. */}
      </Grid>
      {/* main container is ending here. */}
      <Footer />
    </>
  );
};

export default Payments;
