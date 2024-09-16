import { React } from "react";
import { useLocation } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Grid, TextField, Typography, Checkbox } from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Box,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useState } from "react";

const Payments = () => {
  const location = useLocation();
  const { car } = location.state;
  if (!car) {
    return <div>No car Data Availiable Please try again later. </div>;
  }
  const [selectedOption, setSelectedOption] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [newsletterChecked, setNewsletterChecked] = useState(false);

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };
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
            Payment options
          </Typography>
          <Typography className="text-gray-400">
            Please select your payment method{" "}
          </Typography>
          <Grid
            container
            className="p-4"
            gap={2}
            flexWrap={true}
            justifyContent={"space-end"}
          >
            <FormControl>
              <RadioGroup value={selectedOption} onChange={handleRadioChange}>
                <FormControlLabel
                  value="credit"
                  control={<Radio />}
                  label="Credit Card"
                />
                <FormControlLabel
                  value="paypal"
                  control={<Radio />}
                  label="PayPal"
                />
                <FormControlLabel
                  value="bank"
                  control={<Radio />}
                  label="Bank Transfer"
                />
              </RadioGroup>
            </FormControl>

            {selectedOption === "credit" && (
              <>
                <TextField placeholder="Card Number" label="Card Number" />
                <TextField placeholder="DD/MM/YY" label="Expiration Date" />
                <TextField placeholder="Card Holder" label="Card Holder" />
                <TextField placeholder="CVC" label="CVC" />
                <CreditCardIcon />
              </>
            )}
            {selectedOption === "paypal" && (
              <Box sx={{ transition: "all 0.3s ease" }}>
                <Typography variant="h6">PayPal Payment Details</Typography>
              </Box>
            )}
            {selectedOption === "bank" && (
              <Box sx={{ transition: "all 0.3s ease" }}>
                <Typography variant="h6">
                  Bank Transfer Payment Details
                </Typography>
              </Box>
            )}
          </Grid>
        </Grid>
        {/* second container is ending here. */}
        <Grid container className="p-4" direction={"column"}>
          <Typography className="text-[3vh]" sx={{ fontWeight: "bold" }}>
            Additional Information
          </Typography>
          <Grid
            container
            className="p-4"
            gap={2}
            flexWrap={true}
            justifyContent={"space-end"}
            direction={"column"}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={termsChecked}
                  onChange={(e) => setTermsChecked(e.target.checked)}
                  color="primary"
                />
              }
              label="I agree with our terms and conditions and privacy Policy. "
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={newsletterChecked}
                  onChange={(e) => setNewsletterChecked(e.target.checked)}
                  color="primary"
                />
              }
              label="I agree with sending an Marketing and newsleter emails.No spam, promissed. "
            />
          </Grid>
        </Grid>
        {/* third container ending here.  */}


        <Grid container className="p-4 mt-0" direction={"column"}>
          <Grid
            container
            className="p-4 mt-0"
            justifyContent={"space-end"}
            direction={"column"}
          >
                 <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "hsl(225, 80%, 56%)",
                    color: "white",
                    padding: "5px 10px",
                    marginTop: "auto",
                    fontSize: "2vh",
                    width:'20%',
                    height:'30%"'
                  }}
                
                >
                  Rental Car
                </Button>
          </Grid>
        </Grid>





      </Grid>

      {/* main container is ending here. */}

    

      <Footer />
    </>
  );
};

export default Payments;
