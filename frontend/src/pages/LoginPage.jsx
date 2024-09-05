import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  FormControl,
  colors,
} from "@mui/material";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  //const navigate=useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Welcome! ${email}`);
  };

  const handleSignUp = () => {
    // navigate('/signup')
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "25vh" }}>
      <Typography
        variant="h1"
        align="center"
        boxShadow="inherit"
        style={{
          fontWeight: "bold",
          fontSize: "50px",
          marginBottom: "2vh",
          color: "rgb(37 99 235) ",
        }}
      >
        MORENT ™
      </Typography>

      <Paper elevation={3} style={{ padding: 20, borderRadius: "20px" }}>
        <Typography variant="h5" align="center" style={{ fontWeight: "bold" }}>
          Sign In
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} direction="column" alignItems="center">
            {/* <FormControl> */}
            <Grid item>
              <TextField
                variant="outlined"
                fullWidth
                label="Email Address"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                fullWidth
                label="password"
                type="password"
                value={password}
                onChange={(event) => setpassword(event.target.value)}
                required
              />
            </Grid>

            <Grid item>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "skyblue",
                    "&:hover": {
                      backgroundColor: "white !important",
                      borderColor: "skyblue !important",
                      borderWidth: "2px",
                      color: "skyblue",
                      "&:before": {
                        backgroundColor: "skyblue !important",
                        color: "#fff",
                      },
                    },
                    color: "#fff",
                  }}
                >
                  Log In
                </Button>
                <Button
                  onClick={handleSignUp}
                  variant="contained"
                  sx={{
                    backgroundColor: "skyblue",
                    "&:hover": {
                      backgroundColor: "white !important",
                      borderColor: "skyblue !important",
                      borderWidth: "2px",
                      color: "skyblue",
                      "&:before": {
                        backgroundColor: "skyblue !important",
                        color: "#fff",
                      },
                    },
                    color: "#fff",
                  }}
                >
                  sign Up
                </Button>
              </div>
            </Grid>

            {/* </FormControl> */}
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
