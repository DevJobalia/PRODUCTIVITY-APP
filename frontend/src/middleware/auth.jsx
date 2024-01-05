import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { sendToken } from "../utils/API CALLS";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Layout from "../Layout";

export const ProtectRoute = ({ children }) => {
  const [username, setUsername] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendToken();
        setUsername(response.user.username);
        console.log(response.user.username);
      } catch (error) {
        console.error("Error fetching data:", error);
        setUsername(null);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {username !== null ? (
        children
      ) : (
        <Navigate to={"/signin"} replace={true}></Navigate>
      )}
    </>
  );
};

export const ProtectHome = () => {
  const [username, setUsername] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendToken();
        setUsername(response.user.username);
        console.log(response.user.username);
      } catch (error) {
        console.error("Error fetching data:", error);
        setUsername(null);
      }
    };
    console.log("DASHBOARD", username);
    fetchData();
  }, []);

  return (
    <>
      <Layout>{username !== null ? <Dashboard /> : <Home />}</Layout>
    </>
  );
};
