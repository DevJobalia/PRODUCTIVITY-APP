// // validationSchema.js
import * as yup from "yup";

// Validation schema for username
export const usernameSchema = yup.string().required("Username is required");

// Validation schema for password
export const passwordSchema = yup
  .string()
  .min(6, "Password must be at least 6 characters")
  .required("Password is required");

// Validation schema for email
export const emailSchema = yup
  .string()
  .email("Invalid email address")
  .required("Email is required");
