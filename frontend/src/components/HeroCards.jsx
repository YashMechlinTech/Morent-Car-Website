import React from "react";
import LamboImg from "../assets/Lambo.svg";
import LamboTwoImg from "../assets/LamboTwo.svg";
import { Grid, Typography, Button, Card, CardContent } from "@mui/material";

const HeroCards = () => {
  return (
    <Grid container spacing={2}>
      {/* First Card */}
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            backgroundColor: 'rgb(84, 166, 255)',
            borderRadius: '16px',
            position: 'relative',
            height: '50vh',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',  // Ensure content is spaced properly
          }}
        >
          <CardContent sx={{ padding: '16px' }}>
            <Typography
              variant="h3"
              sx={{
                color: 'white',
                fontFamily: 'Plus Jakarta Sans',
                fontSize: '6vh',  // Adjusted font size for better scaling
                marginBottom: '16px',
              }}
            >
              The best platform for car rental.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'white',
                fontFamily: 'Plus Jakarta Sans',
                fontSize: '2vh',  // Adjusted font size for better scaling
                marginBottom: '16px',
              }}
            >
                 Provide cheap car rental services and safe and comfortable services.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'hsl(225, 80%, 56%)',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '20px',
                marginTop: 'auto', 
                fontSize:'2vh',  
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
              bottom: '0',
              left: '20vh',
              width: '80%',
              height: 'auto',
              objectFit: 'cover',  // Ensure image covers the area without distortion
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
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',  // Ensure content is spaced properly
          }}
        >
          <CardContent sx={{ padding: '16px' }}>
            <Typography
              variant="h3"
              sx={{
                color: 'white',
                fontFamily: 'Plus Jakarta Sans',
                fontSize: '6vh',  // Adjusted font size for better scaling
                marginBottom: '16px',
              }}
            >
              Easy way to rent a car at low price.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'white',
                fontFamily: 'Plus Jakarta Sans',
                fontSize: '2vh',  // Adjusted font size for better scaling
                marginBottom: '16px',
              }}
            >
              Provide cheap car rental services and safe and comfortable services.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'rgb(84, 166, 255)',
                color: 'white',
                padding: '5px 10px ',
                borderRadius: '20px',
                marginTop: 'auto', 
                fontSize:'2vh', // Ensure button is at the bottom
              }}
            >
              check Now
            </Button>
          </CardContent>
          <img
            src={LamboTwoImg}
            alt="Lamborghini"
            style={{
              position: 'absolute',
              bottom: '2vh',
              right: '4.5vw',
              width: '70%',
              height: 'auto',
              objectFit: 'cover',  // Ensure image covers the area without distortion
            }}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default HeroCards;
