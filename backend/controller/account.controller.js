import jwt from "jsonwebtoken";
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

/** POST: http://localhost:8080/api/v1/account/login 
 * @param: {
  "username" : "example124",
  "password" : "admin123"
}
*/

export async function login(req, res) {
  const { username, password } = req.body;

  try {
    userModel
      .findOne({ username })
      .then((user) => {
        bcrypt
          .compare(password, user.password)
          .then((passwordCheck) => {
            if (!passwordCheck)
              return res.status(400).send({ error: "Don't have Password" });

            // create jwt token
            const token = jwt.sign(
              {
                userId: user._id,
                username: user.username,
              },
              process.env.JWT_SECRET,
              { expiresIn: "24h" }
            );
            console.log("BEFORE,", token);
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 5); // Set expiration to 5 days from now

            res.cookie("JWT", token, {
              // httpOnly: true,
              maxAge: 900000,
              // expires: expirationDate,
              // secure: true, // Set to true if serving over HTTPS
              // sameSite: "None", // Adjust SameSite attribute based on your needs
              // path: "/",
            });
            console.log("after,", token);
            return res.status(200).send({
              msg: "Login Successful...!",
              username: user.username,
              loggedIn: true,
            });
          })
          .catch((error) => {
            return res.status(400).send({ error: "Password does not Match" });
          });
      })
      .catch((error) => {
        return res.status(404).send({ error: "Username not Found" });
      });
  } catch (error) {
    return res.status(500).send({ error });
  }
}
