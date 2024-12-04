import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { sendToken } from "../utils/API CALLS";

import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Layout from "../Layout";
import { fetchUser } from "../store/slice/userData.slice";
import SignUp from "../pages/SignUp";

// export const ProtectRoute = ({ children }) => {
//   // const [username, setUsername] = useState();

//   const dispatch = useDispatch();
//   useEffect(() => {
//     // Dispatch the fetchUser action when the component mounts
//     dispatch(fetchUser());
//   }, [dispatch]);
//   const userData = useSelector((state) => state.user.data);
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const response = await sendToken();
//   //       setUsername(response.user.username);
//   //       console.log(response.user.username);
//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //       setUsername(null);
//   //     }
//   //   };
//   //   fetchData();
//   // }, []);
//   const role = userData?.role;
//   return (
//     <>
//       {userData !== null ? (
//         role === "User" ? (
//           children
//         ) : (
//           "dev"
//         )
//       ) : (
//         // <Navigate to={"/signin"} replace={true}></Navigate>
//         <SignUp />
//       )}
//     </>
//   );
// };

export const ProtectRoute = ({ children }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data);
  const status = useSelector((state) => state.user.status);

  useLayoutEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const role = userData?.role;
  return (
    <>
      {userData ? (
        <>
          {role === "Admin" ? (
            <div className=" bg-green-500">ADMIN</div>
          ) : role === "User" ? (
            <div className=" bg-red-500">User</div>
          ) : (
            <div className=" bg-orange-500">Moderator</div>
          )}
          {children}
        </>
      ) : (
        <SignUp />
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
  const role = userData?.role;
  return (
    <>
      <Layout>
        {userData ? (
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
