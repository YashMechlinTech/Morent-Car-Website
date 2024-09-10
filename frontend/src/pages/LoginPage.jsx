import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const { login } = useAuth();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/login/",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      login(); //setting the isAuthenticated to true
      navigate("/");
      alert(response.data.message);
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert(error.response?.data?.error || "Login failed");
    }
  };
  const handleSignUp = () => {
    navigate("/register");
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
        <form onSubmit={handleLogin}>
          <Grid container spacing={2} direction="column" alignItems="center">
            {/* <FormControl> */}
            <Grid item>
              <TextField
                variant="outlined"
                fullWidth
                label="Email Address"
                type="email"
                name="email"
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
                name="password"
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
                  onClick={handleLogin}
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
