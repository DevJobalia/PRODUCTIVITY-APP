import { Router } from "express";

import * as dotenv from "dotenv";
import * as controller from "../controller/account.controller.js";
import Auth, { allowRoles } from "../middlewares/Auth.js";

dotenv.config();

// create instance of route
const router = Router();

// CREATE NEW USER
router.route("/register").post(controller.register);
router.route("/login").post(controller.login);
router.route("/user").get(Auth, controller.getLoggedInUser);
router.route("/logout").get(Auth, controller.logout);
router.route("/protected").get(Auth, (req, res) => {
  res.json({ message: "Access granted", user: req.user, role: req.role });
});

// Role-Based Protected Routes
router.route("/admin-dashboard").get(Auth, allowRoles("Admin"), (req, res) => {
  res.json({ message: "Welcome to Admin Dashboard", user: req.user });
});

router
  .route("/moderator-panel")
  .get(Auth, allowRoles("Admin", "Moderator"), (req, res) => {
    res.json({ message: "Welcome to Moderator Panel", user: req.user });
  });

export default router;
