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
  console.log(req.body);
  try {
    userModel
      .findOne({ username })
      .then((user) => {
        console.log(user);
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
            const oneDayInMillis = 24 * 60 * 60 * 1000;

            res.cookie("JWT", token, {
              httpOnly: true,
              maxAge: oneDayInMillis,
              domain: "localhost",
              path: "/",
              // expires: expirationDate,
              // secure: true, // Set to true if serving over HTTPS
              // sameSite: "None", // Adjust SameSite attribute based on your needs
              // path: "/",
            });
            console.log("after,", token);
            return res.status(200).send({
              msg: "Login Successful...!",
              username: user.username,
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

/** GET: http://localhost:8080/api/user/example123 */
export async function getLoggedInUser(req, res) {
  // const { username } = req.params;

  try {
    // const myCookie = req.cookies.JWT;

    // // Do something with the cookie value
    // if (!myCookie) {
    //   return res.status(400).send({ error: "User Not LoggedIn" });
    //   // console.log('Value of myCookie:', myCookie);
    //   // res.send(`Value of myCookie: ${myCookie}`);
    // }
    // const decode = jwt.verify(myCookie, process.env.JWT_SECRET);
    // console.log(decode);

    const LoggedInUser = req.user;
    console.log("DECODE", LoggedInUser.username);

    const user = await userModel.findOne({ username: LoggedInUser.username });

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    console.log("GET USER", user.username);

    /** remove password from user */
    // mongoose return unnecessary data with object so convert it into json
    const { password, ...rest } = Object.assign({}, user.toJSON());

    return res.status(200).send(rest);
  } catch (error) {
    console.error("Error retrieving user:", error);
    return res.status(500).send({ error: "Internal Server Error" });
  }
}
