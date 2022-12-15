import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage"
import LoginForm from "./components/LoginForm"
import SignupForm from "./components/SignupForm"
import CrudTest from "./Crud/CrudTest";
import './index.css'
import CrudUpdate from "./Crud/CrudUpdate";
import CrudCreate from "./Crud/CrudCreate";
import CrudRead from "./Crud/CrudRead";
import CrudDelete from "./Crud/CrudDelete";


const App = () => {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<CrudTest />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/SignupForm" element={<SignupForm />} />
          <Route path="/SignupForm" element={<SignupForm />} />
          <Route path="/CrudTest" element={<CrudTest />} />
          <Route path="/CrudCreate" element={<CrudCreate />} />
          <Route path="/CrudRead" element={<CrudRead />} />
          <Route path="/CrudUpdate" element={<CrudUpdate />} />
          <Route path="/CrudDelete" element={<CrudDelete />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
