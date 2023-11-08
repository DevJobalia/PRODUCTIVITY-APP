// SHARE AI GENERATED IMG TO OUR WEBSITE COMMUNITY

import express from "express";
import * as dotenv from "dotenv";

import Post from "../MONGODB/MODELS/TodoTask.js";

dotenv.config();

const router = express.Router();

// GET ALL POST ROUTE
router.route("/").get(async (req, res) => {
  try {
    // const posts = await Post.find({});

    res.status(201).json({ success: true, data: "posts" });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

// CREATE A POST ROUTE
router.route("/").post(async (req, res) => {
  try {
    // Get input from the front end
    const { title, description, status, tags } = req.body;

    // Save the data to MongoDB
    const newPost = await Post.create({
      title,
      description,
      status,
      tags,
    });

    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
