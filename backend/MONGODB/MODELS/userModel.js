import mongoose from "mongoose";
import bcrypt from "bcrypt";

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a unique username"],
    unique: [true, "Username already exists"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  email: {
    type: String,
    required: [true, "Please provide a unique email"],
    unique: [true, "Email already exists"],
  },
  city: { type: String },
  profile: { type: String },
  // firstName: { type: String },
  // lastName: { type: String },
  // mobile: { type: Number },
});

const userModel = mongoose.models.User || mongoose.model("User", UserSchema);

export default userModel;
