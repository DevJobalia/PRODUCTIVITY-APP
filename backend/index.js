import express from "express";
import * as dotenv from "dotenv"; // to access enviorment variables
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./MONGODB/connect.js";
import todoRoutes from "./ROUTES/todoRoutes.js";
import accountRoutes from "./ROUTES/accountRoutes.js";

// dotenv setup
dotenv.config(); // to pull our enviorment varibles from dotEnv file

// initialise express application
const app = express();
// add additional middleware
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",

    credentials: true,
    methods: "GET, POST, OPTIONS",
    allowedHeaders: "Origin, Content-Type, Accept",
  })
);
// {
//   origin: "http://localhost:5173",
//   methods: "GET,POST,DELETE,PUT",
//   allowedHeaders: "Content-Type,Authorization",
//   credentials: true,
// }
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json({ limit: "50mb" }));
app.set("trust proxy", 1);

// // API ENDPOINTS: to connect our front end side
app.use("/api/v1/post", todoRoutes);
app.use("/api/v1/account", accountRoutes);

// // ROUTE
app.get("/", async (req, res) => {
  res.send("Hello from dalle");
});

// function to run server
const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
