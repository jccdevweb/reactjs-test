import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar-main";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";
import MemberListing from "./components/crud-reactjs/MemberListing";
import MemberCreate from "./components/crud-reactjs/MemberCreate";
import MemberDetails from "./components/crud-reactjs/MemberDetails";
import MemberEdit from "./components/crud-reactjs/MemberEdit";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<MemberListing />} />
          <Route path="/create-member" element={<MemberCreate />} />
          <Route path="/member/detail/:id" element={<MemberDetails />} />
          <Route path="/member/edit/:id" element={<MemberEdit />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App; 
