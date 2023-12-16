import bcrypt from "bcrypt";
import userModel from "../MONGODB/MODELS/userModel.js";

export async function register(req, res) {
  const { username, password, email, city, profile } = req.body;
  try {
    // check if the username, password, and email are not empty
    if (!username || !password || !email) {
      return res
        .status(400)
        .json({ error: "Username, password, and email are required." });
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create a new user
    const newUser = new userModel({
      username: username,
      password: hashedPassword,
      email: email,
      city: city,
      profile: profile,
    });

    // save the new user to the database
    await newUser.save();

    // send a success response
    res.status(201).json({ message: "User successfully registered." });
  } catch (error) {
    // check if the error is due to a duplicate username or email
    if (error.code === 11000) {
      const field = error.message.includes("username") ? "Username" : "Email";
      return res.status(400).json({ error: `${field} already exists.` });
    }

    // send an error response
    res.status(500).json({ error: "Server error. Please try again later." });
  }
}
