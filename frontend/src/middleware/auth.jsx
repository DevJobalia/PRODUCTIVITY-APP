import { Navigate } from "react-router-dom";
import { getCookie } from "../utils/Cookie";

export const ProtectRoute = ({ children }) => {
  const username = getCookie("loggedInUser");
  if (!username) {
    return <Navigate to={"/signin"} replace={true}></Navigate>;
  }
  return children;
};
