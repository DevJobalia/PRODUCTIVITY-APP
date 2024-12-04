import jwt from "jsonwebtoken";
import userModel from "../MONGODB/MODELS/userModel.js";

/** auth middleware */
export default async function Auth(req, res, next) {
  try {
    const token = req.cookies.JWT;

    console.log("Received Token:", req.data);

    if (!token) {
      // Token not present, returning 401 Unauthorized
      throw new Error("Token not present");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    const role = await userModel.findOne({ username: decoded.username });
    console.log("reci", role);
    req.role = role.role;
    console.log(decoded);
    next();
  } catch (error) {
    console.error("Authentication Error:", error);

    if (error.message === "Token not present") {
      return res.status(401).json({ message: "Unauthorized" });
    } else if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    } else {
      return res.status(401).json({ message: "Token verification failed" });
    }
  }
}

export const allowRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.role)) {
      return res
        .status(403)
        .json({ message: "Access denied: You do not have permission" });
    }
    next();
  };
};
