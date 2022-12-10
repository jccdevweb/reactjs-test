import React from "react";
import LoginForms from "./components/LoginForm";
import { Container } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="lg">
      <LoginForms />
    </Container>
  );
};

export default App;
