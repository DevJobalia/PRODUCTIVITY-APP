import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todo from "./pages/Todo";
import Blogs from "./pages/Blogs";
import Events from "./pages/Events";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Layout from "./Layout";
import { Toaster } from "react-hot-toast";
import PageNotFound from "./pages/PageNotFound";
import { ProtectHome, ProtectRoute } from "./middleware/auth";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  // <NavBar />

  {
    path: "/",
    element: <ProtectHome />,
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
    path: "/profile",
    element: (
      <ProtectRoute>
        <Layout>
          <Profile />
        </Layout>
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
