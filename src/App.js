import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage"
const App = () => {
  return (
    <>
      <Router>
        <nav>
            <Link to="/"> Home </Link>
            <Link to="/About"> About  </Link>
            <Link to="/Contact"> Contact  </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
