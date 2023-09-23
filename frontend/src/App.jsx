import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Todo from "./pages/Todo";
import Home from "./pages/Home";
import Toggle from "./components/Toggle";

function App() {
  return (
    <>
      <Toggle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
