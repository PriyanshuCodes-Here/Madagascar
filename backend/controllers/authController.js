import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import User from "../models/user.js";
import sendEmail from "../utils/sendEmail.js";

const generateToken = (id) => {
  return jwt.sign({ userID: id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

// REGISTER USER + SEND VERIFICATION EMAIL
export const registerUser = async (req, res) => {
  try {

    const { firstName, lastName, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const verificationToken = crypto.randomBytes(32).toString("hex");

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      verificationToken,
      isVerified: false3
    });
    const verifyURL = `http://localhost:5000/api/auth/verify/${verificationToken}`;

    await sendEmail(
      email,
      "Verify your email",
      `
        <h2>Email Verification</h2>
        <p>Click the link below to verify your account:</p>
        <a href="${verifyURL}">${verifyURL}</a>
      `
    );

    res.status(201).json({
      message: "Registration successful. Please check your email to verify your account."
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// VERIFY EMAIL
export const verifyEmail = async (req, res) => {
  try {

    const { token } = req.params;

    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      return res.status(400).json({
        message: "Invalid or expired verification token"
      });
    }
    user.isVerified = true;
    user.verificationToken = null;
    await user.save();
    
    res.status(200).json({
      message: "Email verified successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// LOGIN USER
export const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    if (!user.isVerified) {
      return res.status(403).json({
        message: "Please verify your email first"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const token = generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000
    });

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// LOGOUT USER
export const logoutUser = (req, res) => {

  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0)
  });

  res.status(200).json({
    message: "Logged out successfully"
  });
};
  
export const paymentPage = (req, res) => {
  try {
    
  } catch (error) {
    return res.status(500).json({ messagee : error.message});
  }
};