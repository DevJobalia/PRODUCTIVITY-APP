import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Todo from "./pages/Todo";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Events from "./pages/Events";
import AddTask from "./pages/AddTask";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Layout from "./Layout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/todo"
            element={
              // <Layout>
              <Todo />
              // </Layout>
            }
          />
          <Route
            path="/blogs"
            element={
              <Layout>
                <Blogs />
              </Layout>
            }
          />
          <Route
            path="/events"
            element={
              <Layout>
                <Events />
              </Layout>
            }
          />
          <Route
            path="/newTask"
            element={
              <Layout>
                <AddTask />
              </Layout>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </Router>
      <Toaster
        // position="bottom-right"
        toastOptions={{ style: { fontSize: "1.4rem" } }}
      />
    </>
  );
}

export default App;
