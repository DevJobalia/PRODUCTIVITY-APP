import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { sendToken } from "../utils/API CALLS";

import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Layout from "../Layout";
import { fetchUser } from "../store/slice/userData.slice";

export const ProtectRoute = ({ children }) => {
  // const [username, setUsername] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch the fetchUser action when the component mounts
    dispatch(fetchUser());
  }, [dispatch]);
  const userData = useSelector((state) => state.user.data);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await sendToken();
  //       setUsername(response.user.username);
  //       console.log(response.user.username);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setUsername(null);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      {userData !== null ? (
        children
      ) : (
        <Navigate to={"/signin"} replace={true}></Navigate>
      )}
    </>
  );
};

export const ProtectHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch the fetchUser action when the component mounts
    dispatch(fetchUser());
  }, [dispatch]);

  // const [username, setUsername] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await sendToken();
  //       setUsername(response.user.username);
  //       console.log(response.user.username);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setUsername(null);
  //     }
  //   };
  //   console.log("DASHBOARD", username);
  //   fetchData();
  // }, []);
  const userData = useSelector((state) => state.user.data);
  console.log("user data auth", userData);
  const role = userData.role;
  return (
    <>
      <Layout>
        {userData !== null ? (
          role === "Admin" ? (
            <>
              <Dashboard />
              jj
            </>
          ) : (
            "ss"
          )
        ) : (
          <Home />
        )}
        {/* {userData !== null ? <Dashboard /> : <Home />} */}
        {/* {userData} */}
      </Layout>
    </>
  );
};
