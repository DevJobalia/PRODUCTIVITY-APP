import { Router } from "express";

import * as dotenv from "dotenv";
import * as controller from "../controller/account.controller.js";

dotenv.config();

// create instance of route
const router = Router();

// CREATE NEW USER
router.route("/register").post(controller.register);

export default router;
