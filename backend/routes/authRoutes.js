import express from "express";

import {
  registerUser,
  loginUser,
  logoutUser,
  verifyEmail
} from "../controllers/authController.js";

import {
  apiLimiter,
  authLimiter
} from "../middleware/rateLimiter.js";

import { protect } from "../middleware/authMiddleware.js";

import { upload } from '../middleware/uploadMiddleware.js'

const router = express.Router();

router.post("/register", authLimiter, registerUser);
router.post("/login", apiLimiter, loginUser);
router.post("/logout", logoutUser);
router.get("/verify/:token", verifyEmail);


router.post("/upload", protect, upload.single("file"), (req, res) => {
  res.json({
    message: "File uploaded",
    file: req.file,
  });
});

router.get('/health', async (req, res) => {
  res.send("Server is Running");
});
// test protected route
router.get("/profile", protect, (req, res) => {
  res.json({ message: "Protected route accessed", user: req.user });
});

export default router;