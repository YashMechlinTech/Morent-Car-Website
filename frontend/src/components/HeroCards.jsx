import React from "react";
import LamboImg from "../assets/Lambo.svg";
import LamboTwoImg from "../assets/LamboTwo.svg";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Tooltip,
} from "@mui/material";

const HeroCards = () => {
  return (
    <Grid container spacing={3} padding={2}>
      {/* First Card */}
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            backgroundColor: "#E6E6FA",
            borderRadius: "16px",
            position: "relative",
            height: "50vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // Ensure content is spaced properly
            padding: "0px",
          }}
        >
          <CardContent sx={{ padding: "16px" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#333333",

                fontSize: "6vh", // Adjusted font size for better scaling
                marginBottom: "16px",
              }}
            >
              The best platform for car rental.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#333333",

                fontSize: "3vh", // Adjusted font size for better scaling
                marginBottom: "16px",
              }}
            >
              Provide cheap car rental services and safe and comfortable
              services.
            </Typography>
            <Tooltip title="Explore Cars">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#F0A8D0",
                  color: "white",
                  marginTop: "auto",
                  fontSize: "2vh",
                  borderRadius:'20px'
                }}
                onClick={() => {
                  window.scrollTo({ behavior: "smooth", top: 600 });
                }}
              >
                Rental Car
              </Button>
            </Tooltip>
          </CardContent>
          <img
            src={LamboImg}
            alt="Lamborghini"
            style={{
              position: "absolute",
              bottom: "0",
              left: "20vh",
              width: "80%",
              height: "auto",
              objectFit: "cover", // Ensure image covers the area without distortion
            }}
          />
        </Card>
      </Grid>

      {/* Second Card */}
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            backgroundColor: "#E6E6FA",
            borderRadius: "16px",
            position: "relative",
            height: "50vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "0px", // Ensure content is spaced properly
          }}
        >
          <CardContent sx={{ padding: "16px" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#333333",

                fontSize: "6vh", // Adjusted font size for better scaling
                marginBottom: "16px",
              }}
            >
              Easy way to rent a car at low price.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#333333",

                fontSize: "3vh", // Adjusted font size for better scaling
                marginBottom: "16px",
              }}
            >
              Provide cheap car rental services and safe and comfortable
              services.
            </Typography>
            <Tooltip title="Check Cars">
              <Button
                variant="contained"
                sx={{
                  backgroundColor:" #F0A8D0",
                  color: "white",
                  borderRadius:'20px',
                  marginTop: "auto",
                  fontSize: "2vh", // Ensure button is at the bottom
                }}
                onClick={() => {
                  window.scrollTo({ behavior: "smooth", top: 600 });
                }}
              >
                check Now
              </Button>
            </Tooltip>
          </CardContent>
          <img
            src={LamboTwoImg}
            alt="Lamborghini"
            style={{
              position: "absolute",
              bottom: "1vh",
              right: "1.5vw",
              width: "65%",
              height: "auto",
              objectFit: "cover", // Ensure image covers the area without distortion
            }}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default HeroCards;
