import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todo from "./pages/Todo";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Events from "./pages/Events";
import AddTask from "./pages/AddTask";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Layout from "./Layout";
import { Toaster } from "react-hot-toast";
import PageNotFound from "./pages/PageNotFound";
import { ProtectRoute } from "./middleware/auth";

const router = createBrowserRouter([
  // <NavBar />

  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },

  {
    path: "/todo",
    element: (
      <ProtectRoute>
        <Todo />
      </ProtectRoute>
    ),
  },

  {
    path: "/blogs",
    element: (
      <Layout>
        <Blogs />
      </Layout>
    ),
  },

  {
    path: "/events",
    element: (
      <Layout>
        <Events />
      </Layout>
    ),
  },

  {
    path: "/newTask",
    element: (
      <ProtectRoute>
        <Layout>
          <AddTask />
        </Layout>
      </ProtectRoute>
    ),
  },

  { path: "/signup", element: <SignUp /> },
  { path: "/signin", element: <Login /> },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />

      <Toaster
        // position="bottom-right"
        toastOptions={{ style: { fontSize: "1.4rem" } }}
      />
    </>
  );
}

export default App;
