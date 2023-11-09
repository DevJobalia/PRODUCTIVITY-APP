// SHARE AI GENERATED IMG TO OUR WEBSITE COMMUNITY

import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

import Post from "../MONGODB/MODELS/TodoTask.js";

dotenv.config();

const router = express.Router();

// GET ALL POST ROUTE
router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});

    res.status(201).json({ success: true, data: posts });
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

router.delete("/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(itemId)) {
      return res.status(400).json({ error: "Invalid item ID" });
    }
    // Use the Mongoose model to delete the item
    await Post.findByIdAndDelete(itemId);
    res.json({ message: "Item deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the item" });
  }
});

router.put("/:id", async (req, res) => {
  const taskId = req.params.id;
  const { title, description, status, tags } = { ...req.body };

  try {
    const updatedTask = await Post.findByIdAndUpdate(
      taskId,
      { title, description, status, tags },
      { new: true } // To return the updated document
    );

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating task" });
  }
});

export default router;
