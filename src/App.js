import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage"
import LoginForm from "./components/LoginForm"
import SignupForm from "./components/SignupForm"
import Todo from "./todos-component/Todo"
import Todos from "./todos-component/Todos"
import './index.css'



const App = () => {
  return (
    <>
      <Router>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login-form" element={<LoginForm />} />
          <Route path="/signup-form" element={<SignupForm />} />
          <Route path="/todo/:id" element={<Todo />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
