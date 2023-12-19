import jwt from "jsonwebtoken";

/** auth middleware */
export default async function Auth(req, res, next) {
  const token = req.cookies.JWT;

  console.log("Received Token:", token);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log(decoded);
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error);

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    } else {
      return res.status(401).json({ message: "Token verification failed" });
    }
  }
}