import express from "express";
import * as dotenv from "dotenv"; // to access enviorment variables
import cors from "cors";

import connectDB from "./MONGODB/connect.js";
import postRoutes from "./ROUTES/postRoutes.js";

// dotenv setup
dotenv.config(); // to pull our enviorment varibles from dotEnv file

// initialise express application
const app = express();
// add additional middleware
app.use(
  cors()
  // {
  //   origin: "http://localhost:5173/",
  //   methods: "GET,POST",
  //   allowedHeaders: "Content-Type,Authorization",
  // }
);

app.use(express.json({ limit: "50mb" }));

// // API ENDPOINTS: to connect our front end side
app.use("/api/v1/post", postRoutes);
// app.use("/api/v1/dalle", dalleRoutes);

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
