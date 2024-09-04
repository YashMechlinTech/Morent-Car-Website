import React from "react";
import LamboImg from "../assets/Lambo.svg";
import LamboTwoImg from "../assets/LamboTwo.svg";
import { Grid, Typography, Button, Box,Card,CardContent } from '@mui/material';
const HeroCards = () => {
  return (
    <>
      {/* <div className="flex gap-2 m-2">
        <div
          style={{ backgroundColor: "rgb(84, 166, 255)" }}
          className="relative w-[50vw] h-[50vh] rounded-xl "
        >
          <div className="w-8/12">
            <p className="text-white font-[Plus Jakarta Sans] text-[3vw] mt-3 ml-2.5">
              The best platform for car rental.
            </p>
            <p className="text-white font-[Plus Jakarta Sans] text-[1.75vw] p-3">
              Ease of doing a car rental safely and reliably{" "}
            </p>

            <button
              className="ml-[1vw] top-[20vh] left-0  text-white p-1.5 rounded-md ml-2.5"
              style={{ backgroundColor: "hsl(225, 80%, 56%)" }}
            >
              Rental Car
            </button>
            <img
              src={LamboImg}
              className="absolute top-[30vh] left-[13.5vw] w-[34vw] "
              alt=""
            />
          </div>
        </div>

       

        <div
          style={{ backgroundColor: "hsl(225, 80%, 56%)" }}
          className="relative w-[50vw] h-[50vh] rounded-xl "
        >
          <div className="w-8/12">
            <p className="text-white font-[Plus Jakarta Sans] text-[3vw] mt-3 ml-2.5">
              Easy way to rent a car at low price.
            </p>
            <p className="text-white font-[Plus Jakarta Sans] text-[1.75vw] p-3">
              Provide cheap car rental services and safe and comfortable
              services.{" "}
            </p>

            <button
              className="ml-[1vw] top-[20vh] left-0  text-white p-1.5 rounded-md ml-2.5"
              style={{ backgroundColor: "rgb(84, 166, 255)" }}
            >
              Rental Car
            </button>
            <img
              src={LamboTwoImg}
              className="absolute top-[30vh] left-[18vw] w-[28vw] "
              alt=""
            />
          </div>
        </div>
      </div> */}
  

  <Grid container spacing={2} style={{ margin: '16px' }}>
      {/* First Card */}
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            backgroundColor: 'rgb(84, 166, 255)',
            borderRadius: '16px',
            position: 'relative',
            height: '50vh',
            overflow: 'hidden',  // Ensures content doesn't spill out
          }}
        >
          <CardContent sx={{ width: '66%', padding: '16px' }}>
            <Typography
              variant="h3"
              sx={{
                color: 'white',
                fontFamily: 'Plus Jakarta Sans',
                fontSize: '3vw',
                marginTop: '12px',
                marginLeft: '10px',
              }}
            >
              The best platform for car rental.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'white',
                fontFamily: 'Plus Jakarta Sans',
                fontSize: '1.75vw',
                padding: '12px',
              }}
            >
              Ease of doing a car rental safely and reliably
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'hsl(225, 80%, 56%)',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '8px',
                marginLeft: '10px',
                marginTop: '2vw',
              }}
            >
              Rental Car
            </Button>
          </CardContent>
          <img
            src={LamboImg}
            alt="Lamborghini"
            style={{
              position: 'absolute',
              bottom: '0',          // Ensure the image stays within the card
              left: '20%',
              width: '80%',          // Adjust the width to stay within bounds
              height: 'auto',
            }}
          />
        </Card>
      </Grid>

      {/* Second Card */}
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            backgroundColor: 'hsl(225, 80%, 56%)',
            borderRadius: '16px',
            position: 'relative',
            height: '50vh',
            overflow: 'hidden',  // Ensures content doesn't spill out
          }}
        >
          <CardContent sx={{ width: '66%', padding: '16px' }}>
            <Typography
              variant="h3"
              sx={{
                color: 'white',
                fontFamily: 'Plus Jakarta Sans',
                fontSize: '3vw',
                marginTop: '12px',
                marginLeft: '10px',
              }}
            >
              Easy way to rent a car at low price.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'white',
                fontFamily: 'Plus Jakarta Sans',
                fontSize: '1.75vw',
                padding: '12px',
              }}
            >
              Provide cheap car rental services and safe and comfortable
              services.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'rgb(84, 166, 255)',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '8px',
                marginLeft: '10px',
                marginTop: '2vw',
              }}
            >
              Rental Car
            </Button>
          </CardContent>
          <img
            src={LamboTwoImg}
            alt="Lamborghini"
            style={{
              position: 'absolute',
              bottom: '0',          // Ensure the image stays within the card
              left: '35%',
              width: '60%',          // Adjust the width to stay within bounds
              height: 'auto',
            }}
          />
        </Card>
      </Grid>
    </Grid>

    </>
  );
};

export default HeroCards;
