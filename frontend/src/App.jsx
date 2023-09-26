import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Todo from "./pages/Todo";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
