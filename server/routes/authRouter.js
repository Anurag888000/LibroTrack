import express from "express";
import {
  forgotPassword,
  getUser,
  login,
  logout,
  register,
  resetPassword,
  updatePassword,
  verifyOTP,
} from "../controllers/authController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/register", register);
router.post("/verify-otp", verifyOTP);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/me", isAuthenticated, getUser);
router.post("/password/forget", forgotPassword);
router.put("/password/reset/:token", resetPassword);
router.put("/password/update",isAuthenticated,updatePassword);

export default router;
