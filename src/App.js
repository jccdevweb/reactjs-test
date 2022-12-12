import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage"
import LoginForm from "./components/LoginForm"
import Navbar2 from "./components/Navbar2"
import './index.css'


const App = () => {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
