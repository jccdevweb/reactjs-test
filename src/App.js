import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage"
import LoginForm from "./components/forms-components/LoginForm"
import SignupForm from "./components/forms-components/SignupForm"
import Todo from "./components/todos-component/Todo"
import Todos from "./components/todos-component/Todos"
import Crudmain from "./components/crud-component/Crudmain"
import CrudRead from "./components/crud-component/Read"
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
          <Route path="/crud-main" element={<Crudmain />} />
          <Route path="/read/:id" element={<CrudRead />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
