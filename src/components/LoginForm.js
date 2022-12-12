import React, { useState } from "react";
import { Grid, TextField, Typography, Button } from "@mui/material";

const user = {
  username: "chachawao",
  password: "123456",
};

const LoginForm = () => {
  const [login, setLogIn] = useState({
    username: "",
    password: "",
  });

  const submitLogin = (e) => {
    e.preventDefault();

    if (user.username !== login.username) {
      alert("Invalid Username");
      return;
    }

    if (user.password !== login.password) {
      alert("Invalid Password");
    }

    alert("Welcome User");
  };

  return (
    <form onSubmit={submitLogin}>
      <Grid container spacing={2} mt={10}>
        <Grid item xs={12}>
          <Typography variant="h3">Login</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder="Username"
            type="text"
            value={login.username}
            onChange={(e) => setLogIn({ ...login, username: e.target.value })}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder="password"
            type="password"
            value={login.password}
            name="password"
            onChange={(e) => setLogIn({ ...login, password: e.target.value })}
            required
            fullWidth
          />
        </Grid>
          <Grid item xs={12} >
            <Button 
              variant="contained"
              type="submit" 
              fullWidth 
              size="large"
            >
              Log in
            </Button>
        </Grid>
      </Grid>
     
    </form>
  );
};

export default LoginForm;
